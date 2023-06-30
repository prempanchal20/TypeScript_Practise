console.log('TypeScript Is Superset of JavaScript - It add Types and Features on it');

// (!) non-null assertion operator... It is used to assert that a value is not null or undefined.

//------------------------------never effectively throws an error whenever it is defined.---------------------------//

// let x: never = true
// console.log(typeof x);

// const names:string[]=[]
// names.push('Prem');
// names.push(1);
// console.log(names);

//------------------------------------- Tuple - each array element to be known type of value.-------------------------------//

// let myTuple : [number, boolean, 'string'];
// myTuple = [1,true,'Prem'];
// console.log(typeof myTuple);

// -------------------------------------Objects-------------------------------------//

// const car: { type: string, model: string, year: number } = {
//     type: 'BMW', model: 'a', year: 2023
// }

// console.log(typeof car);
// console.log(car.year);

// -------------------------------------ENUM - group of Constants-------------------------------------//

// enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR' }
// const person = { name: 'Prem', hobbies: ['Cricket', 'Tennis'], role: Role.ADMIN }

// if (person.role == Role.ADMIN) {
//     console.log('Admin');
// }

// -------------------------------------Function-------------------------------------//

// function getTime(): String {
//     return new Date().toLocaleDateString()
// }
// console.log(getTime());

//-------------Rest Parameter - when number of Parameter is not known - assign Rest Parameter with three dots (...)-----//

// function users(...name: string[]) {
//     console.log("Hello" + " " + name);
// }
// users('Prem', 'abac', 'asjkd')

// -------------------------------------Arrow Function-------------------------------------//

// let usersData = (...name: string[]) => {
//     console.log("Hello" + " " + name);
// }
// usersData('Prem', 'Dhoni', 'Kohli')

// -------------------------------------Type Casting - as keyword-------------------------------------//

// let x: unknown = 4
// console.log(x as string);
// console.log(typeof x);

// -------------------------------------Type Casting - <> tag---------------------------------------//

// let x: unknown = 4
// console.log(<string>x);
// console.log(typeof x);

// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 29 };
// const u1: User = (['Max', 29] as unknown) as User;

//----------------------------------------------------Inference vs Types--------------------------------------------------//

// Inference - Inference keyword
// Type - Type keyword

// Declaration Merging

// Inference - Extend and Type - &

// Inference More readable compare to Type

// --------------------------------------------------Why Unknown Is Safe then Any Keyword-------------------------------//
// ---------------------------------------------------------ANY ---------------------------------------------------------//

// let age: number;
// let userAge: any;

// userAge = 'This is some age';
// userAge = 20;

// age = userAge;
// console.log(typeof age); // Number - 20

// ---------------------------------------------------------UNKNOWN ---------------------------------------------------------//

// let age1: number;
// let userAge1: unknown;

// userAge1 = 'This is some age';
// userAge1 = 20;

// age1 = userAge1;
// console.log(typeof age1);

// --------------------------------------------- Array Destructuring-----------------------------------------//

// const person = { personName: 'Prem', personAge: 20 }
// const { personName, personAge } = person

// console.log(personName, personAge);