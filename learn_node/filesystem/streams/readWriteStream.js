const fs = require("fs");
const http = require("http").createServer();
const { performance } = require("perf_hooks");
http
  .on("request", (req, res) => {
    console.log(req.url)
    if(req.url=='/w'){
    const start = performance.now();
    const file = fs.createWriteStream("./big-file");

    for (let i = 0; i < 1e2; i++) {
      file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
  }
    file.end();
    const end = performance.now();
    res.end(`File created! ${end - start}`);
  }else if(req.url=='/r'){
    
    // const file2 = fs.createReadStream("./big-file")
    fs.readFile('./big-file',(err,data)=>{
      if(err){
          throw err;
      }
      res.end(data)
    })
  }else if(req.url=='/rs'){
    
    const readable = fs.createReadStream("./big-file")
    let data;
    readable.on('data',(chunk)=>{
      data+=chunk
    })
    readable.on('end',()=>{
      res.end(data)
    })
    
  }else if(req.url=='/rpipe'){
    const readable = fs.createReadStream("./big-file")
    readable.pipe(res);
  }
  })
  .listen(8080, () => {
    console.log(`Server started on port ${8080}`);
  });
