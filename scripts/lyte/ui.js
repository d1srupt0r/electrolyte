const $ = window.jQuery = require('jquery')
const canvas = $('#canvas')[0]

// variables
exports.$ = $
exports.canvas = canvas

// constructor
exports.init = (explorer) => {
  $(() => { }) // jQuery
  ActivityBar()
  Explorer(explorer)
  TitleBar()
}

// methods
function ActivityBar () {
  $('#files').click(() => { $('#explorer').toggle() })
}
function Explorer (list) {
  // ToDo: figure out a way to iterate over this damn list!
  list.forEach((item) => {
    console.log(item)
  })
}
function TitleBar (lyte) {
  var win = require('electron').remote.getCurrentWindow()
  $('button[name=close]').click(() => { win.close() })
  $('button[name=max]').click(() => {
    win.isMaximizable() ? win.unmaximize() : win.maximize()
    lyte.Resize(canvas, $('#game').width(), $('#game').height())
  })
  $('button[name=min]').click(() => { win.minimize() })
}
