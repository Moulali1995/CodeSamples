/* In this tutorial we'll try out the examples related 
to how we can create objects and access the object data */

/* There are two ways to create objects by using object initializer and using a constructor functions */

// 1.object initializers
// simple methods
const car = {};
car.brand = "skoda";
car.model = "rapid";
car.year = 2021;
console.log(car);

const brand = "honda",
  model = "jazz",
  year = 2020;
const car2 = {
  brand,
  model,
  year,
};
console.log(car2);

const car3 = {
  brand: "volkswagon",
  model: "polo",
  year: 2021,
  tag: function () {
    return `${this.brand}-${this.model}-${this.year}`;
  },
};
console.log(car3,car3.tag());

// Object.create
const car4 = Object.create(car3);
console.log(car4.year);

// new Object
const car5 = new Object();
car5.brand = "renault";
car5.model = "magnite";
car5.year = 2021;
console.log(car5);

// 2.Constructor function

function FullName(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  return this.firstName + this.lastName;
}
const user1 = new FullName("first1", "last1");

const user2 = new FullName("first2", "last2");

console.log(user1, user2);
