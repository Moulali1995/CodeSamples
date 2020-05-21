const launch = require('./launch')
const EventEmitter = require('events')
var ee = new EventEmitter()
ee.on('release', () => {
  console.log('satellite released')
})
ee.on('launch', launch)
ee.emit('launch')
ee.emit('release')
