export default class {
  constructor (el) {
    this.el = el
    this.syntax = "js"
  }

  setText (newText) {
    this.el.textContent = newText
  }
}
