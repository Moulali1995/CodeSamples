const http = require('http')
const postdata = JSON.stringify({ car: 'skoda' })

const options = {
  hostname: 'mockbin.com',
  port: 80,
  path: '/request?car=honda',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postdata)
  }
}
let rawData = ''
const req = http.request(options, (res) => {
  res.on('data', (chunk) => {
    rawData += chunk
  })
  res.on('end', () => {
    console.log(rawData)
    console.log('response end')
  })
})
req.on('error', (error) => {
  console.error('error occured : ${error.message}')
}
)
req.write(postdata)
req.end()
