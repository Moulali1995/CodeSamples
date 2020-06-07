const fs= require('fs').promises;
const fs2= require('fs');

(async function(){
const res = await fs.readFile('./data.json','ascii');
const buf =new Buffer.from(res)
Buffer.from()
console.log();


console.log(res)  
})();  
