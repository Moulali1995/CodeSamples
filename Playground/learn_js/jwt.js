var jwt = require('jsonwebtoken')
var token = jwt.sign({
  data: { role: 'admin', payload: [1, 2, 3] }
}, 'shhhhh', { expiresIn: '1s' })
console.log('token', token)
jwt.verify(token, 'shhhhh', function (err, decoded) {
  if (err) throw err
  console.log('decoded', decoded) // bar
})

var decoded = jwt.decode(token, { complete: true })
console.log('decoded.header', decoded.header)
console.log('decoded.payload', decoded.payload)
