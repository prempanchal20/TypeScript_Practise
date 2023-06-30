"use strict";
console.log("Generics enable you to write code that is more flexible and can be used with different data types without explicitly specifying them.");
// function UsersInformation<T, U>(data: T) {
//     return data
// }
// console.log(UsersInformation({ name: 'Prem', age: 20 }).age);
//----------------------------------------------Generics In Interface----------------------------------------------// 
// interface Resource<T> {
//     uid: number,
//     name: string,
//     data: T
// }
// const Person: Resource<object> = {
//     uid: 1,
//     name: 'Prem',
//     data: { lastName: 'Panchal' }
// }
// const Person1: Resource<object> = {
//     uid: 2,
//     name: 'MS',
//     data: { lastName: 'Dhoni' }
// }
// console.log(Person, Person1);
//----------------------------------------------Generics In Class----------------------------------------------// 
// class genericsClass<T, U> {
//     constructor(public name: T, private age: U) {
//         console.log(`age is ${age}`);
//     }
// }
// const classA = new genericsClass<string, number>('Prem', 20)
// console.log(classA);
