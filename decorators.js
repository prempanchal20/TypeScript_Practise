"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
console.log(`Decorators - Feature allow to modify the behaviour of classes, methods, parameters or properties at design time.

They Provide a way to add metadata or additional functionality to these language element without modifiying orignal defination`);
//-------------------------------------------------Decorator Example-------------------------------------------------//
// function decoratorsFunction(constructor: Function) {
//     console.log("Decorators Function");
// }
// @decoratorsFunction
// class Person {
//     name = 'Prem'
//     constructor() {
//         console.log("Person's object");
//     }
// }
// const personA = new Person();
// console.log(personA);
//-------------------------------------------------Decorator Example-------------------------------------------------//
function decoratorsFunction(constructor) {
    console.log("Decorators Function");
}
let Person = class Person {
    constructor() {
        this.name = 'Prem';
        console.log("Person's object");
    }
};
Person = __decorate([
    decoratorsFunction
], Person);
const personA = new Person();
console.log(personA);
