const win = require('electron').remote.getCurrentWindow()
const $ = window.jQuery = require('jquery')
const canvas = $('#canvas')[0]
const delay = 2400

// public
exports.$ = $
exports.canvas = canvas
exports.delay = delay
exports.resize = Resize

// constructor (name only for fun)
exports.drop = (explorer) => {
  $(() => { }) // jQuery
  ActivityBar()
  Explorer(explorer)
  TitleBar()
  Status('Lyte melted hammer loaded!')
}

// private
function ActivityBar () {
  $('#files').click(() => {
    $('#explorer').toggle().ready(() => {
      Status($('#explorer').is(':visible') ? 'To adventure!' : 'GG')
    })
  })
}
function Explorer (list) {
  // ToDo: figure out a way to iterate over this damn list!
  console.log(list.size)
  list.forEach((key, value) => {
    console.log(`${key} = ${value}`)
  })
}
function Resize (width, height) {
  canvas.width = 640
  canvas.height = 480
  console.log(`canvas:${width}x${height}`)
}
function TitleBar () {
  // var win = require('electron').remote.getCurrentWindow()
  $('button[name=close]').click(() => { win.close() })
  $('button[name=max]').click(() => {
    win.isMaximized() ? win.unmaximize() : win.maximize()
    Resize($('#game').width(), $('#game').height())
  })
  $('button[name=min]').click(() => { win.minimize() })
}
function Status (value) {
  $('#status').html(value).fadeIn(delay, () => {
    $('#status').fadeOut(delay)
  })
}
