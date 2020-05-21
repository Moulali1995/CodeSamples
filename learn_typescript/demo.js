"use strict";
exports.__esModule = true;
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log('welcome to typescript');
    };
    return Greeting;
}());
exports.Greeting = Greeting;
var obj = new Greeting();
obj.greet();
