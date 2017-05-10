const api = require('./lyte/api.js')
const engine = require('./lyte/engine.js')
const ui = require('./lyte/ui.js')

const resources = engine.instances(['instances', 'sprites'])

exports.api = api
exports.engine = engine
exports.ui = ui

exports.objects = resources

exports.init = (fps) => {
  api.init()
  ui.init(resources)
  setInterval(engine.run, 128, api)
  setInterval(engine.burn, fps, ui)
}
