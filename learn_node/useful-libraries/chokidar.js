const chokidar = require('chokidar')


chokidar.watch('./package.json').on('all',(event,path)=>{
    console.log(event, path)
})