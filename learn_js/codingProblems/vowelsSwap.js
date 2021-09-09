let str1 = "hello",
  str2 = "";

const vowels = ["a", "e", "i", "o", "u"];
let vowelsArr = [];

for (let i = 0; i < str1.length; i++) {
  if (vowels.includes(str1[i])) {
    vowelsArr.push(str1[i]);
  }
}

for (let i = 0; i < str1.length; i++) {
  if (vowels.includes(str1[i])) {
    str2 = str2 + vowelsArr.pop();
  } else {
    str2 = str2 + str1[i];
  }
}
