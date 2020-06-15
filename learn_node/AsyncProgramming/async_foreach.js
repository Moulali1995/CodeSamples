const numbers = [1, 2, 3, 4, 5];
let data = numbers.map(async (obj) => {
 return new Promise((res,rej)=>{
    setTimeout(() => {
      res(obj * 1000);
    }, obj * 1000)
}
  )
});
console.log(data);
Promise.all(data).then(console.log);
