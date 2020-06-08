const fs = require('fs');

// file stats
console.log( fs.statSync('./data.json'));

// check if the link is directory?
console.log(fs.statSync('../ExternalProcess').isDirectory())

// print all the file in directory
fs.readdir('../filesystem',(err,files)=>{
    console.log(files)
})

// watch changes in a file
fs.watch('./data.json',(eventType,filename)=>{
    if(filename)
    console.log(filename,eventType)
})

fs.appendFileSync('./data.json',"hello lets check the fs.watch method")