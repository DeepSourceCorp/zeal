export const toPascal = (word: string) => {
  // https://stackoverflow.com/a/53952925
  return `${word}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(new RegExp(/\s+(.)(\w+)/, 'g'), ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`)
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), (s) => s.toUpperCase())
}

/**
 * Function that returns `true` or `false` depending on whether the `target` was found in `parentCandidate` or not
 *
 * @param parentCandidate HTMLElement reference of the parent element
 * @param target HTMLElement reference of the element to find inside parent element
 * @returns `true` or `false` depending on whether the `target` was found in `parentCandidate` or not
 */
export const containsElement = (parentCandidate: HTMLElement, target: HTMLElement): boolean => {
  return Boolean(parentCandidate && (target === parentCandidate || parentCandidate.contains(target)))
}

/**
 *  Shorten long numbers into k, m, b, and t notation
 *
 * @param candidate - A number or string value to be shortened
 * @returns A number or string value depending on whether the number was shortened or not
 */
export const shortenLargeNumber = (candidate: number | string): number | string => {
  let number = 0

  if (typeof candidate === 'number') {
    number = candidate
  } else if (typeof candidate === 'string') {
    // Return early if the candidate includes a '%' character.
    if (candidate.includes('%')) {
      return candidate
    }
    number = Number(candidate)
  }

  if (Number.isNaN(number)) return '0'

  // Using absolute since log wont work for negative numbers
  const numberOfDigits = Math.floor(Math.log10(Math.abs(number)))
  if (numberOfDigits <= 2) return String(number) // Return as is for a 3 digit number of less
  const unit = Math.floor(numberOfDigits / 3)
  const shortened = Math.pow(10, numberOfDigits - unit * 3) * Number((number / Math.pow(10, numberOfDigits)).toFixed(1))

  // Correct for floating point error upto 2 decimal places
  // skipcq: JS-0377
  return Math.round(shortened * 100) / 100 + ['', 'k', 'm', 'b', 't'][unit]
}
