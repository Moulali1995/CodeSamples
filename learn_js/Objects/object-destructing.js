//#region ___________________Object destructuring___________________
const theNetherlands = {
  name: "the Netherlands 🇳🇱",
  favoriteFood: "cheese",
  averageHeight: 1.82,
  population: { male: 10000000, female: 1000000 },
};

function print(country) {
  const {
    name,
    favoriteFood,
    averageHeight,
    population: { male, female }, // deep object destructing
  } = country;
  console.log(
    `name=>${name}\n fav-food=>${favoriteFood}\n avg-height=>${averageHeight}\npopulation=>male:${male},female:${female}`
  );
}

print(theNetherlands);
//#endregion

//#region ____________________Array destructuring____________________
const arr = [1, 2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c); //1 2 3 ->array destructing
const [d, ...others] = arr;
console.log(d, others); // 1 [ 2, 3, 4 ] ->d=1, others=[ 2, 3, 4 ] using rest parameters
const [, , ...others2] = arr;
console.log(others2); // [ 3, 4 ] -> skipping indexes


let car={}
car.name="laura" // dot notation
car["company"]="skoda" // square bracket notation

console.log(car['company'])
console.log(car['name'])

car["year of mfg"]=2020
console.log(car["year of mfg"])
//#endregion
