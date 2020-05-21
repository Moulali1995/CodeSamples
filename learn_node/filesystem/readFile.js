const fs = require('fs')
const http = require('http')
http.createServer((req, res) => {
  fs.readFile('./sample.txt', (err, data) => {
    if (err) throw err
    res.write(data)
    res.end()
  })
}).listen(8080, () => {
  console.log('Server started')
})
