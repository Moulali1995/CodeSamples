const spawn = require('child_process').spawn
const child = spawn('node', ['child.js'])
// check child process in child.js
child.stdin.write('Parent')
child.stdout.on('data', (data) => {
  console.log('Child returned data:', data.toString())
})
child.stderr.on('data', (data) => {
  console.log('Some error occurred', data)
})
