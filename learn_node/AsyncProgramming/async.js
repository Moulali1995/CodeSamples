const request=require('request-promise')
const message= async()=>{
    const response= await request('https://jsonplaceholder.typicode.com/todos/1')
     var res=JSON.parse(response)
    console.log(res.id)
    return res.id
}
message().then(res=>{
    console.log("res",res)
})