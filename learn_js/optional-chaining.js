// The optional chaining ?. is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

'use strict';

/* -----------------------------------------------------------------------*/

const user = { address: { lane: 'xyz' } };
// console.log(user.address.street) //TypeError: Cannot read property 'street' of undefined
console.log(user?.address.street) //undefined
// console.log(user?.address1.street) //TypeError: Cannot read property 'street' of undefined
console.log(user?.address1?.street) //undefined

/* -----------------------------------------------------------------------*/

//Other variants: ?.(), ?.[]

const user1 = {
  name: "John",
  print: function () {
    console.log(this.name)
  }
}
const user2 = null;

user1?.print(); // John
// user2.print(); // TypeError: Cannot read property 'print' of null
user2?.print(); // nothing 

console.log(user1['name']);
console.log(user2?.['name']);

/* -----------------------------------------------------------------------*/

