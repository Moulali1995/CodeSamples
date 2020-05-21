const fs = require('fs')
fs.stat('./sample.txt', (err, stats) => {
  if (err) throw err
  console.log(stats)
  console.log(JSON.stringify(stats))
})
fs.rename('./sample.txt', './sample1.txt',(err)=>{
    if(err)throw err
    console.log('file renamed successfully')
})
console.log(__dirname)