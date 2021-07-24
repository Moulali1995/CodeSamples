"use strict";
let age = undefined;

// conditionally declare a function
if (age < 18) {
  function welcome() {
    console.log("Hello!");
  }
  welcome()
} else {
 
    welcome();
  function welcome() {
    console.log("Greetings!");
  }
}

// ...use it later
welcome(); // Error: welcome is not defined
