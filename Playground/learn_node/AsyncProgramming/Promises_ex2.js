function double (x) {
  return new Promise(resolve => {
    setTimeout(() => { resolve(x * 2) }, 2000
    )
  })
}

function addall (y) {
  return new Promise(resolve => {
    return double(10).then(a => {
      return double(20).then(b => {
        return double(30).then(c => {
          var sum = y + a + b + c
          resolve(sum)
        })
      })
    })
  })
}

addall(0).then(res => {
  console.log(res)
})
