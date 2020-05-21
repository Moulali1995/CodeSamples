const events = require('events')
const em = new events.EventEmitter()
const showFlag = function (signal) {
  console.log('Signal:', signal)
}
const showFlag2 = function () {
  console.log('removing Listener')
}
em.on('flag', showFlag)
em.on('flag1', showFlag2)
em.emit('flag', 'green')
em.emit('flag', 'red')
em.emit('flag', 'yellow')
em.emit('flag1')

em.removeListener('flag1', showFlag2)
