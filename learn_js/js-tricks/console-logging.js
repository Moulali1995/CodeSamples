const michelangelo = {
  name: "Michelangelo",
  color: "orange",
  weapon: "nunchucks",
};
const leonardo = { name: "Leonardo", color: "blue", weapon: "swords" };
console.log({ michelangelo, leonardo });

console.table({ michelangelo, leonardo });

const ninjaTurtles = [
  { name: "Michelangelo", color: "orange", weapon: "nunchucks" },
];

console.table(ninjaTurtles);
// will work on browser
console.info("javascript");
console.warn("javascript");
console.error("javascript");
console.log("hey %s", "kiran");
console.log("%cCss in debugging", "color:blue");
function goat() {
  console.trace("Got was called here...!");
  return "Mehhhhhh....! 🐑";
}
console.log(goat());
console.time("this");
for (var i = 0; i < 1000; i++) {
  var j = 0;
  while (j < 50) {
    j++;
  }
}
console.timeEnd("this");

console.group("console methods");
console.memory;
console.assert(false, "something wrong");
console.count();
console.groupEnd("console methods");

// console.clear()
