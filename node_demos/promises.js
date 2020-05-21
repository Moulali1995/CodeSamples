const message = new Promise((resolve,reject)=>{
const add=(a,b)=>new Error('err')
reject(add(2,3))
})

message.then(res=>{
    console.log(res)
}).catch(err=>console.error("there you go"+err))