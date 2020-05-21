// interfaces example
// interface employee{
//     first_name:string,
//     last_name:string,
//     age:number,
//     print_name:(()=>void)
// }
// var emp1:employee={
//     first_name:"michael",
//     last_name:"jackson",
//     age:39,  
//     print_name:():void=>{console.log (emp1.first_name+" "+emp1.last_name)}
// }

// console.log(emp1.print_name())

// interfaces and arrays
// interface vehicle{
//     [index:string]:{year:number,model:string}
// }
// var veh1=<vehicle>{}
// veh1["honda"]={year:2011,model:"passionpro"}
// console.log(veh1["honda"])


// inheritance in interfaces

interface Book{
    bookname:string
}
interface Author extends Book{
    authorname:string
}
var book1=<Author>{}
book1.bookname='harry potter-something'
book1.authorname="jk rowlings"
console.log(book1.bookname)
console.log(book1.authorname)
