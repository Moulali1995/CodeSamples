
function selectionSort(n, arr) {
  let i = 0, k;
  while (i < n - 1) {
    k = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[k] > arr[j]) {
        k = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[k];
    arr[k] = temp;
    i++;
  }

  return arr;

}

function bubbleSort(n, arr) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }

    }
  }
  return arr;
}

function testCode() {

  let randomArr = [];
  for (let t = 0; t < 100000; t++) {
    randomArr.push(Math.ceil(Math.random() * 10000))
  }

  let start = new Date();
  const sortedArr = selectionSort(randomArr.length, randomArr);
  let end = new Date();

  console.log("Execution Time for selection sort():", end - start)


  start = new Date();
  const sortedBubbleArr = bubbleSort(randomArr.length, randomArr);
  end = new Date();

  console.log("Execution Time for bubble sort():", end - start);

  start = new Date();
  const sortedRandomArr = randomArr.sort((a, b) => a - b);
  end = new Date();

  console.log("Execution Time for native sort():", end - start);


  console.log("selection sort test result match:", sortedArr.join() == sortedRandomArr.join());
  console.log("bubble sort test resultmatch:", sortedArr.join() == sortedBubbleArr.join())


}


testCode();