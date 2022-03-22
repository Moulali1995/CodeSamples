/* Prototype inheritance 

const person1 = {
  name: "salman",
  city: "mumbai",
  bio() {
    console.log(this.name, this.city);
  },
};

const person2 = {
    name:'aamir'
}

person2.__proto__ = person1;
person2.bio();

*/

/* call, bind & apply method 

const person1 = {
  name: "salman",
  city: "mumbai",
};

const person2 = {
  name: "aamir",
  city: "delhi",
};
function bio(pinCode, state) {
  console.log(this.name, this.city, pinCode, state);
}

bio.apply(person1, ["567890", "MH"]);
bio.call(person2, "908760", "DL");


const bio2 = bio.bind(person2)
console.log(bio2);
bio2("908760", "DL")

*/

