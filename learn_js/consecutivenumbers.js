console.log("------let---------");
for (let i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i*1000)
}
console.log("-------var---------");
setTimeout(()=>{for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), i*1000)
}},6000)
