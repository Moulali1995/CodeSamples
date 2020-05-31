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
