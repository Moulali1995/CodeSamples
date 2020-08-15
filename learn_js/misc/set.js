let set = new Set(),
  n = 10;
for (let i = 0; i < n; i++) {
  set.add(10);
}
console.log(set, set.has(5), set.add(10));
console.log(set.delete(10));
