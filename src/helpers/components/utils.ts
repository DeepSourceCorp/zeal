export const toPascal = (word: string) => {
  // https://stackoverflow.com/a/53952925
  return `${word}`
    .replace(new RegExp(/[-_]+/, 'g'), ' ')
    .replace(new RegExp(/[^\w\s]/, 'g'), '')
    .replace(
      new RegExp(/\s+(.)(\w+)/, 'g'),
      ($1: string, $2: string, $3: string) => `${$2.toUpperCase() + $3.toLowerCase()}`
    )
    .replace(new RegExp(/\s/, 'g'), '')
    .replace(new RegExp(/\w/), (s) => s.toUpperCase())
}

export const containsElement = (parentCandidate: HTMLElement, target: HTMLElement): boolean => {
  return Boolean(
    parentCandidate && (target === parentCandidate || parentCandidate.contains(target))
  )
}

export const padNumber = (num: number) => String(num).padStart(2, '0')
