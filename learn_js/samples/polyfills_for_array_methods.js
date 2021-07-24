let cars = [
    { name: "skoda laura", year: 2010 },
    { name: "alto", year: 2015 },
    { name: "rapid", year: 2016 },
    { name: "bmw cd100", year: 2020 },
    { name: "mercedes benz", year: 2021 },
  ];
  
  /* 
  //------------------------------------Reduce-----------------------------------------------
  // Array method
  let cars2 = cars.reduce(function (a, b) {
    return a + " " + b.name;
  }, "cars = ");
  console.log(cars2);
  
  // polyfill
  Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : undefined;
  
    for (let i = 0; i < this.length; i++) {
      if (accumulator !== undefined) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
      } else {
        accumulator = this[i];
      }
    }
    return accumulator;
  };
  
  // polyfill method call
  cars2 = cars.myReduce((a, b) => a + " " + b.name);
  
  console.log(JSON.stringify(cars2));
  
  */
  
  /*
  //------------------------------------Filter-----------------------------------------------
  // Array method
  let cars2 = cars.filter((c) => c);
  
  // polyfill
  Array.prototype.myFilter = function (callback) {
    let arr = [];
    console.log("callback", this)
    for (let i = 0; i < this.length; i++) {
      if(callback(this[i], i, this)){
        arr.push(this[i])
      }
    }
    return arr;
  };
  
  // polyfill method call
  cars2 = cars.myFilter((c) => c.year>2015);
  
  console.log(JSON.stringify(cars2));
  */
  
  /*
  //------------------------------------Map-----------------------------------------------
  // Array method
  let cars2 = cars.map((c) => c);
  
  // polyfill
  Array.prototype.myMap = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this));
    }
    return arr;
  };
  
  // polyfill method call
  cars2 = cars.myMap((c) => c);
  
  console.log(cars2);
  */
  
  /*
  //------------------------------------ForEach-----------------------------------------------
  // Array method
  cars.forEach((c) => {
    console.log(c);
  });
  
  
  // polyfill 
  Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  
  // polyfill method call
  cars.myForEach((c) => {
    console.log(c);
  });
  
  */
  