let age = null;

let welcome =
  age < 18
    ? function () {
        console.log("Hello!");
      }
    : function () {
        console.log("Greetings!");
      };

welcome(); // ok now
