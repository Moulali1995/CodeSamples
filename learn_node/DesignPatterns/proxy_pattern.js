
const createProxy =(subject)=>({
    task1:()=>{
        console.log(`${subject.task1()} successful`);
    },
    task2:()=>subject.task2.apply(subject,arguments)
    
})


const foo={
    task1:()=>"db connection",
    task2:()=>"run sql queries"
}
 

const proxy = createProxy(foo)
console.log(proxy.task1());
console.log(proxy.task2());
