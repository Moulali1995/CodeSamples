function countdigits (minlimit, maxlimit, digit2count) {
  // count digit from min to max
  // 11,13,1
  var count = 0
  for (let i = minlimit; i <= maxlimit; i++) {
    var temp = i
    while (temp > 0) {
      console.log(`in while ${temp},${i}`)
      // console.log("in while"+temp)
      if (temp % 10 === digit2count) {
        count++
        // console.log(count)
      }
      temp = parseInt(temp / 10)
      // console.log("after decrement"+temp)
    }
  }
  return count
}

console.log(countdigits(11, 14, 1))
