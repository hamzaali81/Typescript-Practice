"use strict";
// let str: Array<string>;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ABC = /** @class */ (function () {
    // private name: string;
    // protected age: number;
    // public year: number;
    function ABC(name, age, year) {
        this.name = name;
        this.age = age;
        this.year = year;
    }
    ABC.prototype.func2 = function () {
        console.log(this.name);
        console.log(this.age);
        console.log(this.year);
    };
    ;
    ABC.func1 = function () {
        console.log('test function');
    };
    ;
    ABC.prototype.payInvoice = function () {
        console.log(this.name + ' Please pay us!' + 'ypur age is' + this.age);
    };
    return ABC;
}());
;
var EFC = /** @class */ (function (_super) {
    __extends(EFC, _super);
    function EFC(name, age, year, id) {
        var _this = _super.call(this, name, age, year) || this;
        _this.id = id;
        return _this;
    }
    EFC.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return EFC;
}(ABC));
var abc = new ABC('hamza', 21, 1999);
var efc = new EFC('hamza', 21, 1999, 21);
console.log(abc.func2());
efc.payInvoice();
// console.log(efc.payInvoice());
// console.log(ABC.func1());
// interface UserInterface{ 
//     name: string;
//     age: number;
//     year: number;
//     func2();
// }
// class ABC {
//     private name: string;
//     protected age: number;
//     public year: number;
//     constructor(name: string, age: number, year: number){
//         this.name = name;
//         this.age = age;
//         this.year = year;
//     }
//      func2() {
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.year);
//     };
//     static func1(){
//         console.log('test function');
//     };
//     payInvoice(){
//         console.log(this.name+ ' Please pay us!'+ 'ypur age is'+ this.age );
//     }
// };
// class EFC extends ABC {
//     id: number;
//     constructor(name: string, age: number, year: number, id: number){
//         super(name, age, year);
//             this.id = id;
//         }
//         payInvoice(){
//             super.payInvoice(); 
//         }
//     }
// const abc = new ABC('hamza', 21, 1999);
// const efc: ABC = new EFC('hamza', 21, 1999, 21);
// console.log(abc.func2());
// efc.payInvoice()
// // console.log(efc.payInvoice());
// // console.log(ABC.func1());
