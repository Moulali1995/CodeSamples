var global_var = 100;
var Numberfamily = /** @class */ (function () {
    function Numberfamily() {
        this.a = 10; // undefined variable type
        console.log("instance variable inside constructor :", this.a);
        console.log("static variable b:", Numberfamily.b);
    }
    Numberfamily.prototype.Show = function () {
        var local_var = 30;
        console.log("local variable=", local_var);
    };
    Numberfamily.b = 20;
    return Numberfamily;
}());
var obj = new Numberfamily();
console.log("constructor called");
obj.Show();
console.log("global variable:", global_var);
console.log("static variable", Numberfamily.b);
console.log("class variable", obj.a);
