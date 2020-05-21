const {
    performance
} = require('perf_hooks');

var limit = 10000, arr = [];

const promise1=new Promise((resolve)=>{
var start_a = performance.now()
console.log('------------------for-loop-arr-push-----------------------')

function a() {
    for (var i = 0; i < limit; i++) {
        arr.push(i)
        console.log(i)
    }
}
a();
var end_a = performance.now()
resolve(`A execution time:${end_a - start_a} ms`);

})
// 83.426ms


const promise2=new Promise((resolve)=>{
console.log('------------------for-loop-----------------------')

var start_b = performance.now()
function b() {
    for (var i = 0; i < limit; i++) {
        console.log(i)
    }
}
b();
var end_b = performance.now()
resolve(`B execution time:${end_b - start_b} ms`);

})
// 87.976ms


const promise3=new Promise((resolve)=>{
console.log('------------------forEach-----------------------')

var start_c = performance.now()
function c() {
    arr.forEach(element => {
        console.log(element)
    });
}
c();
var end_c = performance.now()
resolve(`C execution time:${end_c - start_c} ms`);

})

Promise.all([promise1,promise2,promise3]).then(console.log)
