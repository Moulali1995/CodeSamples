// var keyword returns 5 since loop exits with value 5 and its not block scope
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log('Welcome ', i)
  }, i * 1000)
}

// let keyword are block scope so the value of i is bound for each loop
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log('Welcome ', i)
  }, i * 1000)
}
