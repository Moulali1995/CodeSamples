var a = [];
const arrayPush = new Promise((resolve) => {

    setTimeout(() => {
        for (var i = 0; i < 100; i++) {
            a.push(i + 1)
        }
        resolve(a);
    }, 1000);
})

const res = async () => {
    var data = await arrayPush;
    console.log(data[99])
};
res();

arrayPush.then((arr) => console.log(arr[99]))