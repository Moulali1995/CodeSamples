// find the missing numbers between the boundaries 100 & 200 from the userIds list
//#region  Approach 1
const userIds = [100, 102, 105, 118, 119, 109, 120, 160, 151, 152];
const missingIds = [];
userIds.sort((a, b) => a - b);

let j = 0;
for (let i = 100; i <= 200; i++) {
  if (i <= userIds[j]) {
    while (i <= userIds[j]) {
      if (i != userIds[j]) {
        missingIds.push(i);
        break;
      } else {
        j++;
        break;
      }
    }
  } else {
    missingIds.push(i);
  }
}
console.log(missingIds);
//#endregion

//#region Approach 2
var limit1 = 100,
  limit2 = 200;
for (let i = 0; i < userIds.length - 1; i++) {
  let j = 0,
    temp = userIds[i];
  while (j < userIds[i + 1] - userIds[i] - 1) {
    temp++;
    missingIds.push(temp);
    j++;
  }
}
if (userIds[userIds.length - 1] < limit2) {
  let k = userIds[userIds.length - 1] + 1;
  while (k <= limit2) {
    missingIds.push(k);
    k++;
  }
}
console.log(missingIds);

//#endregion
