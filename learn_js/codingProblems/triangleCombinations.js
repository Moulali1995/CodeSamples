// return the number of combinations of triangle formed i.e., a+b>c

function checkTriangleCombinations(comb) {
  comb.sort((a, b) => b - a);
  let counter = 0;
  for (let i = 0; i <= comb.length - 3; i++) {
    if (comb[i] + comb[i + 1] > comb[i + 2]) {
      counter++;
    }
  }
  return counter;
}

var arr = [1, 2, 3, 9, 7, 4, 8, 5, 6];
console.log(checkTriangleCombinations(arr));
