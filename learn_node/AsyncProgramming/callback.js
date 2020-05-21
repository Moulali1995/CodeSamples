const complete = function (callback) {
  return callback(null, 'Homework completed')
}
const started = function () {
  console.log('Homework started')
  complete((err, res) => {
    console.log(res)
  }
  )
}

started()
