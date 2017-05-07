// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const $ = window.jQuery = require('jquery')

const lyte = require('./lyte.js')

var $canvas = $('#canvas')[0]
lyte.Resize($canvas, $('#game').width(), $('#game').height())

// jQuery on ready
$(() => { })

// title bar buttons
var win = require('electron').remote.getCurrentWindow()
$('button[name=close]').click(() => { win.close() })
$('button[name=max]').click(() => {
  if (win.isMaximized()) {
    win.unmaximize()
  } else {
    win.maximize()
  }
  // ToDo: fix resizing
  lyte.Resize($canvas, $('#game').width(), $('#game').height())
})
$('button[name=min]').click(() => { win.minimize() })
// actionbar -> explorer
$('#files').click(() => { $('#explorer').fadeToggle(300) })

lyte.Fire($canvas, 60)

var types = ['instances', 'sprites']
// var tree = lyte.TreeView(types)
types.forEach((n) => {
  console.log(n)
  $('#explorer ul').append(`<li>${n}</li>`)
})

$('#status').html('Lyte engine loaded!')
