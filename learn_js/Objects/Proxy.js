let proxyObj = new Proxy(
  { name: "skoda", model: 2015, versions: ["sdi", "fdi", "cvi"] },
  {
    get: (item, property, itemProxy) => {
      return item[property];
    },
    set: (item, property, value, itemProxy) => {
      if (value > 2015) item[property] = value;
      else {
        throw new Error("Model cannot be older than 2015");
      }
    },
  }
);

console.log(proxyObj.name, (proxyObj.model = 2019), proxyObj.model);

var checkEven = (arr) => {
  return new Proxy(arr, {
    get: (item, property, itemProxy) => {
      if (!isNaN(property) && property != null) {
        return property < 0 ? item[item.length + property] : item[property];
      } else {
        throw new TypeError("index should be a number!");
      }
    },
    set: (item, property, value, itemProxy) => {
      item[property] = value;
    },
  });
};
var oddNumber = [1, 3, 5];
console.log(checkEven(oddNumber)[0], (checkEven(oddNumber)[1] = 11));
