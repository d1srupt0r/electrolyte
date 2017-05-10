const glob = require('glob')
const path = require('path')

exports.instances = (items) => {
  var resources = new Map()
  items.forEach((item) => {
    glob(`./${item}/*.js`, 'nocase', (err, files) => {
      if (err) { console.error(err) }
      files.forEach((f) => {
        resources.set(`o_${path.basename(f, '.js')}`, require(path.resolve(f)))
      }, this)
    })
  })
  return resources
}

exports.run = (api) => {}
exports.burn = (ui) => {
  // set 2d context
  var ctx = ui.canvas.getContext('2d', { alpha: 1 })
  ctx.clearRect(0, 0, ui.canvas.width, ui.canvas.height)
  // instance event life cycle
  /* instances.forEach(function (inst) {
    var obj = inst.obj
    obj.draw(ctx)
    obj.step()
  }, this) */
}
exports.burn3d = (ui) => { throw new Error('Not Implemented!') }
