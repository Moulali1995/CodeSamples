const mkdirp = require('mkdirp')
mkdirp('./assets/pictures').then((made) => {
  if (made == undefined) {
    console.log('already exists')
  } else {
    console.log(`made directories, starting with ${made}`)
  }
})