exports.create = (x, y, canvas, obj) => {
  console.log(`create a ${obj}`)
  obj.create()
  return {
    object: obj,
    canvas: canvas,
    x: x,
    y: y
  }
}
