var arr=[1,20,15,5];
arr.sort() // doesn't work properly for numbers since they are converted into strings and then compared so 200< 50 since 2<5 simple and WEIRD
console.log(arr)
arr.sort((a,b)=>a-b)// ascending
console.log(arr)
arr.sort((a,b)=>b-a)// descending
console.log(arr)

/*
[ 1, 15, 20, 5 ]
[ 1, 5, 15, 20 ]
[ 20, 15, 5, 1 ]
*/

var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  // sort by value
  items.sort(function (a, b) {
    return a.value - b.value;
  });
  console.log(items)
  
  // sort by name
  items.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

  console.log(items)