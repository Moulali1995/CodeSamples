process.stdin.resume()
process.stdin.on('data', (data) => {
  try {
    var interval = setInterval(() => {
      process.stdout.write('child')
    }, 1000)
    setTimeout(() => clearInterval(interval), 10000)
  } catch (err) {
    process.stderr.write(err.message)
  }
})
