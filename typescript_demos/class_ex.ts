// class Author{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     printBook():string{return "Bookname_parentclass"+this.name}
//     printAuthor():string{return "Authorname"+this.name}
// }
// class Book extends Author{
   
//     printBook():string{
//         console.log(super.printBook())
//         return "Bookname_childclass"+this.name}
// }

// var book = new Book("harry potter")
// console.log(book.name)
// console.log(book.printBook())
// console.log(book.printAuthor())

// class and interface

interface Library{
 bookname:string
}
class Author implements Library{
    static pages:number
    bookname:string
    protected name:string
    constructor(name:string,pages:number){
        this.name=name
        this.bookname=name
        Author.pages=pages
    }
    printBook():string{return "Bookname_parentclass"+this.name}
    printAuthor():string{return "Authorname"+this.name}
}
class Book extends Author{
   
    printBook():string{
        console.log(super.printBook())
        return "Bookname_childclass"+this.name}
}

var book = new Book("harry potter",1080)
console.log(book.printBook())
console.log(book.printAuthor())
console.log(book instanceof Book)
console.log(Book.pages)