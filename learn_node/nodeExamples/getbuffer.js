const http = require('http')
const url = 'http://nodeprogram.com/'
let raw_data
http.get(url, (res) => {
  res.on('data', (chunk) => {
    raw_data+=chunk
  })

  res.on('end', () => {
    console.log(raw_data)
  })
}).on('error', () => {
  console.log('error occured')
})
