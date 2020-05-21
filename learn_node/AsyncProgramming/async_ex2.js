function double (x) {
  return new Promise(resolve => {
    setTimeout(() => { resolve(x * 2) }, 2000
    )
  })
}
async function addall (y) {
  var a = await double(10)
  var b = await double(20)
  var c = await double(30)
  return y + a + b + c
}

addall(0).then(res => console.log(res))
