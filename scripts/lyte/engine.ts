const glob = require('glob')
const path = require('path')

exports.resources = (items) => {
  var list = new Map()
  items.forEach((item) => {
    glob(`./${item}/*.js`, 'nocase', (err, files) => {
      if (err) { console.error(err) }
      files.forEach((f) => {
        list.set(`o_${path.basename(f, '.js')}`, require(path.resolve(f)))
      }, this)
    })
  })
  return list
}

exports.run = (api) => {
  // instance event life cycle
  /* instances.forEach(function (inst) {
    var obj = inst.obj
    obj.draw(ctx)
    obj.step()
  }, this) */
}
exports.burn = (melted) => {
  var mhc = melted.hammer.canvas
  // set 2d context
  var ctx = mhc.getContext('2d', { alpha: 1 })
  ctx.clearRect(0, 0, mhc.width, mhc.height)
}
exports.burn3d = (ui) => { throw new Error('Not Implemented!') }
