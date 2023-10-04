// Clone object
'use strict';

// object.assign to clone n-objects into a single object
let oldState = { id: '007', name: 'Bond' }
let newState = Object.assign({}, oldState, { name: 'James Bond' })
console.log(newState)

// spread operator used as ... three dots can be used to destructure the objects and create a new one
let obj1 = { name: 'Captain america', age: 25 }
let obj2 = { name: 'iron man', age: 30 }
let newState2 = { ...obj1, ...obj2 }
console.log(newState2)
