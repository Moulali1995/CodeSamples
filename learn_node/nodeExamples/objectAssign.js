var oldState = { id: '007', name: 'Bond' }
var newState = Object.assign({}, oldState, { name: 'James Bond' })
console.log(newState)
var newData = { name: 'Bond reborn', age: 25 }
var newState2 = { ...oldState, ...newData }
console.log(newState2)
