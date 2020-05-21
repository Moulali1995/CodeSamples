var buf=new Buffer('Hello')
console.log('-------------------------------')
console.log(buf.toString())
console.log(buf[2])
buf[2]=100
console.log(buf.toString())
console.log('-------------------------------')

var buf2=new Buffer('cool')
buf2.forEach(item=>console.log(item))
console.log('-------------------------------')
