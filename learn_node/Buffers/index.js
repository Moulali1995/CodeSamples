//#region
// create a empty buffer with size
let buf = Buffer.alloc(10);
buf[0] = 72;
let result = {
  buffer: buf,
  length: buf.length,
  toString: buf.toString(),
  toJSON: buf.toJSON(),
};
console.log(result);
//#endregion

//#region
// creating a buffer with some data
const data = "hello";
buf = Buffer.from(data);
result = {
  buffer: buf,
  length: buf.length,
  toString: buf.toString(),
  characterSet: data.split("").map((ch) => ch.charCodeAt()),
  toJSON: buf.toJSON(),
};
console.log(result);
//#endregion

//#region
// buffer concatenation
const buf1 = Buffer.from("{msg:");
const buf2 = Buffer.from('"Hello"}');
const bufArr = [buf1, buf2];
const buf3 = Buffer.concat(bufArr).toString();
console.log(buf3);

//#endregion

//#region output
/*
{ buffer: <Buffer 48 00 00 00 00 00 00 00 00 00>,
  length: 10,
  toString: 'H\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000',
  toJSON: { type: 'Buffer', data: [ 72, 0,
0, 0, 0, 0, 0, 0, 0, 0 ] } }
{ buffer: <Buffer 68 65 6c 6c 6f>,
  length: 5,
  toString: 'hello',
  characterSet: [ 104, 101, 108, 108, 111 ],
  toJSON: { type: 'Buffer', data: [ 104, 101, 108, 108, 111 ] } }
{msg:"Hello"}

*/
//#endregion
