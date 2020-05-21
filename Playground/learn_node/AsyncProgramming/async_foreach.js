const numbers=[1,2,3,4,5]
let data =  numbers.map(async(obj)=>
    await Promise.resolve(obj)
)
console.log(data);
Promise.all(data).then(console.log)
