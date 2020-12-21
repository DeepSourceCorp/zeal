import icons from '../icons/icons.json'

interface icons {
  [key: string]: any
}

class Icon {
  name: string
  contents: string
  constructor(name: string, contents: string) {
    this.name = name
    this.contents = contents
  }
}

export default Object.keys(icons)
  .map((key) => new Icon(key, icons[key]))
  .reduce((object, icon) => {
    object[icon.name] = icon
    return object
  }, {})
