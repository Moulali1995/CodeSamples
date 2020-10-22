const crypto = require("crypto");
// Creating a unique salt for a particular user
const salt = crypto.randomBytes(16).toString("hex");

// Hashing user's salt and password with 1000 iterations,
let hash = crypto
  .pbkdf2Sync("password", salt, 1000, 64, `sha512`)
  .toString(`hex`);
  hash = crypto.pbkdf2Sync(password,  
    this.salt, 1000, 64, `sha512`).toString(`hex`); 
console.log(salt, hash);
console.log(crypto);