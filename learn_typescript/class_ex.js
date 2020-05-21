// class Author{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }
//     printBook():string{return "Bookname_parentclass"+this.name}
//     printAuthor():string{return "Authorname"+this.name}
// }
// class Book extends Author{
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Author = /** @class */ (function () {
    function Author(name, pages) {
        this.name = name;
        this.bookname = name;
        Author.pages = pages;
    }
    Author.prototype.printBook = function () { return "Bookname_parentclass" + this.name; };
    Author.prototype.printAuthor = function () { return "Authorname" + this.name; };
    return Author;
}());
var Book = /** @class */ (function (_super) {
    __extends(Book, _super);
    function Book() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Book.prototype.printBook = function () {
        console.log(_super.prototype.printBook.call(this));
        return "Bookname_childclass" + this.name;
    };
    return Book;
}(Author));
var book = new Book("harry potter", 1080);
console.log(book.printBook());
console.log(book.printAuthor());
console.log(book instanceof Book);
console.log(Book.pages);
