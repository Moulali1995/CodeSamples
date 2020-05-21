const data=require('./service1.js.js')
const func=require("./service3")
const ap=require("./service2")
const serv4=require("./service4")
//service1 method
console.log(data.person.name('shaik1'))

// service2 methods
console.log(func.showAge(23))
console.log(func.showName('shaik'))

//service3 methods
console.log(ap.app())
console.log(ap.app2())
console.log(ap.app3)

//service4 methods
console.log(serv4(1))