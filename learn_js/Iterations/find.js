const { performance } = require('perf_hooks')
var arr = [], limit = 20000, key = 500, start = 0, end = 0;
for (var i = 0; i < limit; i++) {
    arr.push(i);
}

const preomise1 = new Promise((resolve) => {

    console.log("---------------------find using for loop-----------------")
    start = performance.now()
    for (var i = 0; i < limit; i++) {
        if (key == arr[i]) {
            resolve("key found")
            break;
        }
    }
    end = performance.now()
    console.log(`find using for loop execution time:${end - start} ms`)

})

const preomise2 = new Promise((resolve) => {

    console.log("---------------------find using forEach-----------------")
    start = performance.now()
    arr.forEach((ele) => {
        if (key == ele) {
            resolve("key found")
        }
    })
    end = performance.now()
    console.log(`find using forEach execution time:${end - start} ms`)

})

Promise.all([preomise1, preomise2]).then(console.log)