


/* ---------currying-2 --------
let add = (a) => (b) => b ? add(a + b) : a;
console.log(add(1)(2)(3)(4)());
*/

/* -------- curring-1 ---------
let add = function (a, b) {
  console.log(a, "+", b);
  return a + b;
};
console.log(add(1, 2));

let add2 = add.bind(this, 2);
console.log(add2);
console.log(add2(5));
*/

/* --------setTimeout without time-------
console.log("start");

function cb() {
  console.log("callback-1");
}
setTimeout(cb, 0); // will be called after the GEC execution is completed

console.log("end");
for(let i=0;i<10;i++){
    console.log('hello',i)
}

*/

/* --------setTimeout with time-------
console.log("start");

function cb() {
  console.log("callback-1");
}
setTimeout(cb, 5000); // pass callback function
setTimeout(cb(), 5000); // callback function will be called immediately

console.log("end");
/*

/* ------closures------
function vehicle() {
  let vName = "toyota";
  function car() {
    let cName = "corolla";
    console.log(vName, cName);
  }
  car()
}
vehicle();
*/
