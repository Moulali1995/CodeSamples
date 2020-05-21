const fs = require('fs')
const data = fs.readFileSync('./sample.txt', 'utf-8')
console.log(data)

const data1=fs.writeFileSync('./sample.txt','hello there'+new Date())
console.log(data1)