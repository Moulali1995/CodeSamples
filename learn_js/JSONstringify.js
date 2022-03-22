//#region
let user = {
  name: "Prateek Singh",
  age: 26,
};
console.log(user);
console.log(user.toString());
console.log(JSON.stringify(user));

/*
{ name: 'Prateek Singh', age: 26 }  // normal object logged in console
[object Object] // when object is converted to string it represents it as Object
{"name":"Prateek Singh","age":26} // just stringified
*/
//#endregion

//#region Second argument
const userDetails = [
  {
    name: "Dhoni",
    age: 38,
  },
  {
    name: "shikar dhawan",
    city: "hyderabad",
  },
];
console.log(JSON.stringify(userDetails, ["city"]));
// [{},{"city":"hyderabad"}] -> gets only the required property from the array of objects
//#endregion

//#region Validation through function
user = {
  name: "Prateek Singh",
  age: 26,
};
console.log(
  JSON.stringify(user, (key, value) => {
    if (typeof value == "string") {
      return undefined;
    }
    return value;
  })
);

// {"age":26}
//#endregion

//#region indentation
console.log(JSON.stringify(user, null, 2));

console.log(JSON.stringify(user, null, "--"));
/*
{
  "name": "Prateek Singh",
  "age": 26
}
{
--"name": "Prateek Singh",
--"age": 26
}
*/
//#endregion

//#region toJSON()
user = {
  firstName: "Prateek",
  lastName: "Singh",
  age: 26,
  toJSON() {
    return {
      fullName: `${this.firstName} + ${this.lastName}`,
    };
  },
};
console.log(JSON.stringify(user));
// {"fullName":"Prateek + Singh"} -> only the toJSON value is returned
//#endregion
