// return the number of combinations of triangle formed i.e., a+b>c
var comb = [1, 2, 3, 9, 7, 4, 8, 5, 6];
comb.sort((a, b) => a - b);
let counter = 0;
for (let i = 0; i <= comb.length - 3; i++) {
  if (comb[i] + comb[i + 1] > comb[i + 2]) {
    counter++;
  }
}
