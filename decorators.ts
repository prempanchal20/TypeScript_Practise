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

function decoratorsFunction(constructor: Function) {
    console.log("Decorators Function");
}

@decoratorsFunction
class Person {
    name = 'Prem'
    constructor() {
        console.log("Person's object");
    }
}

const personA = new Person();
console.log(personA);