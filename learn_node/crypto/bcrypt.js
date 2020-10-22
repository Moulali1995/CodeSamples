const bcrypt = require("bcrypt");
let hash;
(async () => {
  const hash = await bcrypt.hash("password", 10);
  const hash2 = await bcrypt.hash(hash, 10);
  console.log(hash,hash2);
  const result = await bcrypt.compare("password", hash);
  console.log(result);
})();
