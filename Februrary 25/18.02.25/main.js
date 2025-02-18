"use strict";
//Animal
//Bird
//Dog
//Cat
//Fish
//Snake
//Lizard
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyCustomClass = void 0;
var MyCustomClass = /** @class */ (function () {
    function MyCustomClass() {
        this.noop = "No";
        console.log("MyCustomClass constructor");
    }
    return MyCustomClass;
}());
exports.MyCustomClass = MyCustomClass;
var custom_1 = new MyCustomClass();
console.log(custom_1.noop);
var data = [];
var data_1 = [];
console.log(data_1 == data);
