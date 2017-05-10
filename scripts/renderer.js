// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const lyte = require('./lyte.js')

lyte.init(60)

lyte.api.resize(lyte.ui.canvas, 640, 480)
lyte.ui.$('#status').html('Lyte engine loaded!')

if (lyte.api.keyboard_check(lyte.api.vk.left)) {
  console.log('gotem')
}
