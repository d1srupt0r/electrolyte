// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
let canvas = document.getElementById('canvas')
let controls = require('./js/controls.js')
let game = require('./js/game.js')

// controls
document.addEventListener('keydown', (e) => { controls.keys[e.keyCode] = true })
document.addEventListener('keyup', (e) => { controls.keys[e.keyCode] = false })

// main function
exports.Start = () => {
  game.Create(canvas, controls)
  setInterval(Render, 60)
}
// main canvas render
function Render () {
  game.Render()
}
