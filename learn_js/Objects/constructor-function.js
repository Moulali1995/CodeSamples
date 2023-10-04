/* Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.
*/
'use strict';

function FullName(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.print = function () {
    console.log(this.firstName, this.lastName)
  }
  // return [this.firstName, this.lastName] // return this for primitives types else return the non-primitive data i.e., object, array
}
const user1 = new FullName("iron", "man");

const user2 = new FullName("captain", "america");

console.log(user1, user2);
user1.print() // can be called only if this is returned
user2.print()