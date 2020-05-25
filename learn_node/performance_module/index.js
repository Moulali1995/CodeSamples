const {performance, PerformanceObserver} = require('perf_hooks');
const fs= require('fs')
const ops= new PerformanceObserver((items)=>{
    console.log(items.getEntries())
    performance.clearMarks();
})

ops.observe({entryTypes:["measure"]})

performance.mark("taskStart")
for(var i=0;i<100;i++){
    fs.readFileSync('../filesystem/data.json')
}
performance.mark("taskEnd")

performance.measure("ReadFile","taskStart","taskEnd")


// without PerformanceObserver
var start=performance.now()
for(var i=0;i<100;i++){
    fs.readFileSync('../filesystem/data.json')
}
var end=performance.now()
console.log("duration => ",end-start)