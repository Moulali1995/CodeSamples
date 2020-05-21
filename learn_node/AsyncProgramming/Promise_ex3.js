function double (x) {
    return new Promise((resolve,reject)=>{
     setTimeout(() => { resolve(x * 2) }, 2000
      )
    })
  }
  
  /*
  double(10).then(res => {
    console.log(res)
  }).catch((err)=>console.log("Error:"+err))
  */
//   double(10).then(res => {
//     console.log(res)
//   },(err)=>console.log("Error:"+err))

  double(10).then(res => {
    console.log(res)
    return res
  }).then((err)=>console.log("Error:"+err))
  .catch(console.log)
  
 
  