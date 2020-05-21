const exec=require('child_process').exec
exec('node -v',(err,stdout,stderr)=>{
    if(err)throw err;
    console.log(stdout)
})