var addition = (a, b) => {
  return new Promise((resolve, reject) => {
  // resolve('hello')
    var sum = a + b
    if (sum) {
      resolve(sum)
    } else {
      reject(Error('Something unexpected happened'))
    }
  })
}
var subtraction = (a, b) => {
  return new Promise((resolve, reject) => {
    // resolve('hello')
    var sum = a - b
    if (sum) {
      resolve(sum)
    } else {
      reject(Error('Something unexpected happened'))
    }
  })
}
var multiplication = (a, b) => {
  return new Promise((resolve, reject) => {
    // resolve('hello')
    var sum = a * b
    if (sum) {
      resolve(sum)
    } else {
      reject(Error('Something unexpected happened'))
    }
  })
}
var division = (a, b) => {
  return new Promise((resolve, reject) => {
    // resolve('hello')
    var sum = a / b
    if (sum) {
      resolve(sum)
    } else {
      reject(Error('Something unexpected happened'))
    }
  })
}
addition(2, 5).then(added => {
  return subtraction(added, 1)
}).then(subtracted => {
  return multiplication(subtracted, 5)
}).then(multiplied => {
  return division(multiplied, 5)
})
  .then(divided => {
    console.log(divided)
  })
  .catch(res => {
    console.log(res)
  })
//result is 6 since 2+5-1*5/5
var promise1= addition(10,5)
var promise2= subtraction(20,5)

Promise.all([promise1,promise2])
.then(res=>console.log(res))
.catch(err=>console.log(err))