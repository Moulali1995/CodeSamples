const os = require('os')

console.log(os.cpus()
,os.totalmem()/1024**3
,os.freemem()/1024**3
,os.uptime())