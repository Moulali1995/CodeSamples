const https = require('https')
const url = 'https://gist.githubusercontent.com/azat-co/a3b93807d89fd5f98ba7829f0557e266/raw/43adc16c256ec52264c2d0bc0251369faf02a3e2/gistfile1.txt'
https.get(url, (res) => {
  let rawData = ''
  res.on('data', (chunk) => {
    rawData += chunk
  })
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData)
      const fu=parsedData[0]
      console.log(fu.first_name+'\n'+fu.last_name+'\n'+fu.email)
    } catch (e) {
      console.log(e.message)
    }
  })
}).on('error', (error) => {
  console.error('error occured : ${error.message}')
})
