const util = require('util');
const printThis = util.deprecate(()=>{
    console.log("something")
},"this function is deprecated");

printThis();

const promiseMethod=()=>console.log("hello");
const promise = util.promisify(promiseMethod)

promise()

// promise().then((data)=>console.log(data)).catch((err)=>console.log(err))
