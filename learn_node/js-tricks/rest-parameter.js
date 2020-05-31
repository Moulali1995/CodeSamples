function print(...params) {
    console.log(params)
    typeof params[0]==='object'?
    console.table(...params):
    console.table(params);
    
}

print(1,2,3,4)


function printObj(params){
    console.log(params)
    console.table(params)
}

print({ name: "Michelangelo", color: "orange", weapon: "nunchucks"})