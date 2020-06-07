const fs = require("fs");
const zlib = require("zlib");
const crypto = require("crypto");
const http = require("http");

http
  .createServer((req, res) => {
    if (req.url == "/pkg") {
      const readable = fs.createReadStream("./package.json");
      readable
        .pipe(zlib.createGzip())
        .pipe(crypto.createCipher("aes192", "a_secret"))
        .on("data", () => process.stdout.write("."))
        .pipe(fs.createWriteStream("oldfile.txt.gz"))
        .on("finish", () => console.log("finish"));
      res.end();
    } else if (req.url == "/unpkg") {
      const readable = fs.createReadStream("./oldfile.txt.gz");
      readable
        .pipe(crypto.createDecipher("aes192", "a_secret"))
        .pipe(zlib.createGunzip())
        .on("data", () => process.stdout.write("."))
        .pipe(fs.createWriteStream("newfile.txt"))
        .on("finish", () => console.log("finish"));
      res.end();
    }
  })
  .listen(8080, () => console.log("server started at 8080"));
