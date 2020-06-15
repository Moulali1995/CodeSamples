/* find the last occurence of '0' without traversing the whole array. 
it should return the index of the last occurenc ef 0 when 0 is encountered for the first time itself
*/
var arr = [0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] == 0) {
    console.log(i + 1);
    break;
  }
}
