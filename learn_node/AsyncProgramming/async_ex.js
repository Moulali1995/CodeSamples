const axios = require('axios')
async function getData () {
  const url = 'http://jsonplaceholder.typicode.com/todos/1'
  await axios.get(url).then((res) =>{ 
    console.log(res.data)
  })
}
getData()
