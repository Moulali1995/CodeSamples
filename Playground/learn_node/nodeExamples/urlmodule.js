var url = require('url')
var path = 'https://www.sce.com:8080/login?fname=moulali&lname=m'
var q = url.parse(path, true)
console.log(q.host)
console.log(q.pathname)
console.log(q.search)
var params = url.parse(path, true).query
console.log(`login details ---first name:${params.fname} and last name:${params.lname}`)
