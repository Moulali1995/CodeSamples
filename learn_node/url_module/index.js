var url = require('url')
const querystring = require('querystring');
var path = 'https://www.sce.com:8080/login/?fname=moulali&lname=m'

// parsing url
var parsed_url = url.parse(path, true)
console.log(parsed_url)

// format url
var format_url = url.format(parsed_url)
console.log(format_url)

// query
var params = url.parse(path, true).query
console.log(params)

// using querystring for query parameters
var stringified_parameters = querystring.stringify(params)

console.log(stringified_parameters)

var parameters = querystring.parse(stringified_parameters)

console.log(parameters)