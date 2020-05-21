const events =  require('events')
const em=new events.EventEmitter()
const data=[1,2,3]
em.on('start', (data) => {
    console.log("event started")
    data.map(item=>
  console.log(item))
})
em.emit('start',data)
