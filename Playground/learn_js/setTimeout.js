/*
for(var i=0;i<=5;i++)
setTimeout(()=>{console.log('count',i)},i*1000)
*/
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log('count ', i)
  }, 3000)
}
