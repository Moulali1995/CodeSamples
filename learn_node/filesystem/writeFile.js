const fs = require('fs')
const http = require('http')
http.createServer((req, res) => {
  let input = 'some data'
  // use fs.appendFile to prevent data loss and fs.write if data loss is optional
  fs.appendFile('./sample.txt', input + new Date()+"\n", (err) => {
    if (err) throw err
    res.write('--------data successfully written in the file-----------\n')
    const filedata = fs.readFileSync('./sample.txt')
    res.write(filedata)
    res.end()
  })
}).listen(8080, () => {
  console.log('Server started')
})
