/* In this tutorial we'll try out the examples related 
to how we can create objects and access the object data */

'use strict';

// Create objects with object initializers

/* -----------------------------------------------------------------------*/
const car = {};
car.brand = "skoda";
car.model = "rapid";
car.year = 2021;
console.log(car);

/* -----------------------------------------------------------------------*/

const brand = "honda",
  model = "jazz",
  year = 2020;
const car2 = {
  brand,
  model,
  year,
};
console.log(car2);

/* -----------------------------------------------------------------------*/
// method inside object
const car3 = {
  brand: "volkswagon",
  model: "polo",
  year: 2021,
  // tag: function () {
  //   return `${this.brand}-${this.model}-${this.year}`;
  // },
};
// console.log(car3, car3.tag());

/* -----------------------------------------------------------------------*/

/* Object.create will create a new empty object with prototypal inheritance with original object body as __proto__ data.
If null is provided as arg then the it is undefined __proto__ data but if {} is provided then it has {} data in __proto__
*/

// With a non-empty object
let car4 = Object.create(car3);
console.log(car4, car4.__proto__); // {} { brand: 'volkswagon', model: 'polo', year: 2021 }

// With null 
car4 = Object.create(null);
car4.name = "jaguar";
console.log(car4, car4.__proto__); // [Object: null prototype] { name: 'jaguar' } undefined

// with {}
car4 = Object.create({});
console.log(car4, car4.__proto__); // {} {}

/* -----------------------------------------------------------------------*/

// new Object constructor
const car5 = new Object("John");
car5.brand = "renault";
car5.model = "magnite";
car5.year = 2021;
console.log(car5);

/* -----------------------------------------------------------------------*/


