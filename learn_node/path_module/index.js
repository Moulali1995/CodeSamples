const path = require("path");

const string = __filename;
console.log(__filename)

// path.sep: /
console.log("path.sep:", path.sep);
// path.delimiter: :
console.log("path.delimiter:", path.delimiter);
console.log("------");
// path.dirname(): /Users/gp/Desktop/node_module
console.log("path.dirname():", path.dirname(string));
// path.extname(): .js
console.log("path.extname():", path.extname(string));
// path.basename(): path.js
console.log("path.basename():", path.basename(string));
// path.basename(): path
console.log("path.basename():", path.basename(string, path.extname(string)));
console.log("------");
// path.parse() { root: '/',
//   dir: '/Users/stacycho/Desktop/node_module',
//   base: 'path.js',
//   ext: '.js',
//   name: 'path' }
console.log("path.parse()", path.parse(string));
// path.format(): C:\users\stacycho/pathjs
console.log(
  "path.format():",
  path.format({
    dir: "C:\\users\\stacycho",
    name: "path",
    ext: ".js",
  })
);
// path.normalize(): C:/users\\stacycho\path.js
console.log(
  "path.normalize():",
  path.normalize("C://users\\\\stacycho\\path.js")
);
console.log("------");
// path.isAbsolute(): false
console.log("path.isAbsolute():", path.isAbsolute("C:\\"));
// path.isAbsolute(): false
console.log("path.isAbsolute():", path.isAbsolute("./home"));
console.log("------");
// path.relative(): ../C:\
console.log(
  "path.relative():",
  path.relative("C:\\users\\stacycho\\path.js", "C:\\")
);
// path.join(): /Users/stacycho/Desktop/users/stacycho
console.log(
  "path.join():",
  path.join(__dirname, "..", "..")
);
console.log(__dirname)
// path.resolve(): /stacycho
console.log(
  "path.resolve():",
  path.resolve(__dirname, "..", "/users", ".", "/stacycho")
);
