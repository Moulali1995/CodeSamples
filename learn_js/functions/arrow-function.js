const print = (msg) => console.log(msg); // single line statement
print("hello world");

const printTime = (msg) => {
  const data = msg + new Date(); // multi-line statements
  console.log(data);
};
printTime("Time =>");
