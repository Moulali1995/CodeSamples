var event = require('events')
var ee = new event.EventEmitter()
ee.once('laugh', function () {
  console.log('laugh')
}
)
ee.on('laugh', function () {
  console.log('laugh2')
}
)
ee.emit('laugh')
// ee.emit('laugh')
