"use strict";
console.log("Classes - TypeScript");
//---------------------------Classes / Members - Public, Private, Protected---------------------------//
// Constructor - Special Function That Create and initialize an object instance of class.
// Class Name Should be in start with Capital Case
// -----------------------------------------Classes Example - 1-----------------------------------------//
// class Invoice {
//     ownerName: string
//     ownerDetail: string
//     private ownerSalary: number
//     constructor(n: string, d: string, s: number) {
//         this.ownerName = n, this.ownerDetail = d, this.ownerSalary = s
//         console.log(this.ownerSalary); // Access Private Modifier Inside class
//     }
// }
// const InvoiceOne = new Invoice('Prem', 'Trainnie', 999999)
// const InvoiceTwo = new Invoice('a', 'HR', 99999)
// console.log(InvoiceOne, InvoiceTwo);
// const invoiceArray: Invoice[] = []
// invoiceArray.push(InvoiceOne)
// console.log('invoiceArray- ', invoiceArray);
// invoiceArray.forEach(inv => { console.log(inv.ownerName, inv.ownerDetail) })
// --------------------------------------------ShortHand Method of Class-1------------------------------------//
// class Invoice {
//     constructor(public ownerName: string, public ownerDetail: string, private ownerSalary: number) {
//         console.log(this.ownerSalary); // Access Private Modifier Inside class
//     }
// }
// const InvoiceOne = new Invoice('Prem', 'Trainnie', 999999)
// const InvoiceTwo = new Invoice('a', 'HR', 99999)
// console.log(InvoiceOne, InvoiceTwo);
// const invoiceArray: Invoice[] = []
// invoiceArray.push(InvoiceOne)
// console.log('invoiceArray- ', invoiceArray);
// invoiceArray.forEach(inv => { console.log(inv.ownerName, inv.ownerDetail) })
// ----------------------------------------------Class-2----------------------------------------------//
// class Product {
//     title: string;
//     price: number;
//     private isListed: boolean;
//     constructor(name: string, pr: number) {
//         this.title = name;
//         this.price = pr;
//         this.isListed = true;
//     }
// }
// -----------------------------------ShortHand Method of Class-2---------------------------//
// class Product {
//     private isListed: boolean;
//     constructor(public title: string, public price: number) {
//         this.isListed = true
//     }
// }
//----------------------------------------------------Inheritance - extends------------------------------------//
// class Parent {
//     name = "Prem Panchal"
// }
// class Child extends Parent {
//     getName() {
//         return this.name
//     }
// }
// let c1 = new Child();
// console.log("Get Name is:- ", c1.getName());
//------------------------------------------------ReadOnly Property------------------------------------------------//
// class studentDetail {
//     studentID: number
//     readonly studentName: string
//     constructor(id: number, name: string) { this.studentID = id, this.studentName = name }
// }
// let student1 = new studentDetail(1, 'Prem')
// student1.studentID = 5
// student1.studentName = 'abc'
// console.log(student1);
//-----------------------------------------------------------Function Signatures--------------------------------------//
//----------------------------------------------------------------Example -1-------------------------------------------//
// let greet: (a: string, b: string) => void;
// greet = (name: string, greeting: string) => {
//     console.log(`${name} and ${greeting}`);
// }
// greet('Prem', '2')
//----------------------------------------------------------------Example -2-------------------------------------------//
// let calculate: (a: number, b: number, c: string) => void;
// calculate = (numOne: number, numTwo: number, result: string) => {
//     if (result === 'add') {
//         return numOne + numTwo;
//     }
//     else {
//         return numOne - numTwo
//     }
// }
// console.log(calculate(1, 2, ''));
