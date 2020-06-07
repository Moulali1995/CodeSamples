//#region send multiple arguments
function print(...params) {
  console.log(params);
  typeof params[0] === "object"
    ? console.table(...params)
    : console.table(params);
}

print(1, 2, 3, 4);
print({ name: "Michelangelo", color: "orange", weapon: "nunchucks" });
/*
[ 1, 2, 3, 4 ]
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │   1    │
│    1    │   2    │
│    2    │   3    │
│    3    │   4    │
└─────────┴────────┘
[ { name: 'Michelangelo', color: 'orange',
weapon: 'nunchucks' } ]
┌─────────┬────────────────┐
│ (index) │     Values     │
├─────────┼────────────────┤
│  name   │ 'Michelangelo' │
│  color  │    'orange'    │
│ weapon  │  'nunchucks'   │
└─────────┴────────────────┘
*/
//#endregion
