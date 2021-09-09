// sample-1
var print = function (item) {
  console.log(item)
}
var x = 10
function a (x=20) {
  //var x = 20
  function b(x)
  {
    print(x)
  }b(x)
  print(x)
}
a()
print(x)


// sample-2
function counter() {
  var cnt = 0;
  return function IncrementCount() {
    cnt += 1;
    console.log(cnt);
  }
}
const funcCall = counter();
console.log(funcCall); // function IncrementCount()
funcCall(); //1
funcCall(); //2
funcCall(); //3

