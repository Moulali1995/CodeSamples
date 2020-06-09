/*
var request = require('request')
var limit = 5
var print=function(i){
  setTimeout(() => { console.log('wait for' + i * 1000);return; }, i * 1000)
}
for (let i = 1; i <= limit; i++) {
  request('https://jsonplaceholder.typicode.com/todos/1', (err, response, body) => {
    if (err)console.log(err)
    else
    if (response.statusCode === 400) {
      console.log(body)
    } else if (
      response.statusCode === 200) {
      print(i);
    }
  }
  )
}
*/
/*
const https = require('http')
const url = 'http://jsonplaceholder.typicode.com/todos/'
https.get(url, (response) => {
  response.on('data', (chunk) => {
    console.log(chunk.toString('utf8'))
  })
  response.on('end', () => {
    console.log('response has ended')
  })
}).on('error', (error) => {
  console.error(`Got error: ${error.message}`)
})
*/

const request = require('request')
const url = 'http://jsonplaceholder.typicode.com/todos/'
request(url, (err, res) => {
  console.log(res)
})
