const a = setInterval(() => console.log('HI'), 1000)

setTimeout(() => clearInterval(a), 5000)
