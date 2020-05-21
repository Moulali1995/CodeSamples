var http = require('http')
var url = require('url')
const path = require('path')
var dt = require(path.join(__dirname,'t','currentdate.js'))
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('Hello World...The Time is ' + dt.datefunc() + '<br/>')
  var q = url.parse(req.url, true).query
  res.write(q.fname + ' ' + q.lname)
  res.end('Bye Bye...!')
}).listen(8080)
