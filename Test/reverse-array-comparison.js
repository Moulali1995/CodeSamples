
function reverseArr(n, arr) {
  for (let start = 0, end = n - 1; start < end; start++, end--) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

  }
  return arr;

}

function recursiveReverseArr(arr, start, end) {
  if (start >= end) return;

  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;
  recursiveReverseArr(arr, start + 1, end - 1);
  return arr;
}

function testCode() {
  // recursion works till 13000 array elements after that throws maximum stack size limit exceeded.
  let randomArr = [];
  for (let t = 0; t < 13000; t++) {
    randomArr.push(t)
  }

  let start = new Date();
  const reversedArr = reverseArr(randomArr.length, randomArr);
  let end = new Date();

  console.log("Execution Time for reverseArr :", end - start)

  start = new Date();
  const recursiveReverse = recursiveReverseArr(randomArr, 0, randomArr.length - 1);
  end = new Date();

  console.log("Execution Time for recursive reverse():", end - start);

  start = new Date();
  const reversedRandomArr = randomArr.reverse();
  end = new Date();

  console.log("Execution Time for native reverse():", end - start);



  console.log("reverseArr match:", reversedRandomArr.join() == reversedArr.join());
  console.log("recursive match:", reversedRandomArr.join() == recursiveReverse.join());



}


testCode();