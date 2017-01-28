import TextModel from './src/textmodel'
import * as keyWatcher from 'keywatcher'
import pressed from 'pressed'
import includes from 'lodash.includes'
//import * as _ from 'lodash'

let editor = document.getElementById('editor')
let textModel = new TextModel(editor)
let pressedKeys = []
pressed.start(editor)

textModel.setText('alskjdf')

function addToPressedKeys(e) {
  let charCode = e.key
    if (includes(pressedKeys, charCode)) {
      // Do not add it if it is already in there
    } else {
      pressedKeys.push(charCode)
    }
}
function removeFromPressedKeys (e) {
  console.log(pressedKeys)
  let charCode = e.key
  pressedKeys.splice(pressedKeys.indexOf(charCode), 1)
  console.log(e)
}
//keyWatcher.watchKeys(editor, addToPressedKeys, addToPressedKeys)
//keyWatcher.watchKeyup(editor, removeFromPressedKeys)
var interval = window.setInterval(() => {
  console.log(pressed.listAllKeys())
}, 50)
