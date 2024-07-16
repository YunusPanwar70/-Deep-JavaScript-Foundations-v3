// let a = 10;
// a++;
// console.log(a);

// let b = 11;
// ++b;
// console.log(b);

// console.log(1 === 1); true
// console.log(1 == '1'); true
// console.log(1 === '1'); false
// console.log(0 === -0); true
// console.log(Object.is(0 === -0)); false
// console.log(isNaN(NaN)); true
// console.log(Array.isArray([])); true
// console.log(1 > 2 > 3); false
// console.log(1 < 2 < 3); true


// let global = 'hello';
// function glo() {
//     return global
// }
// console.log(glo()); // 'hello'

// function bloc() {
//     let blockVal ='world'; 
//     console.log(blockVal);
// }
// bloc() // 'world'


// function myFunction() {
//     let functionScopedVar = "I am function scoped";
//     console.log(functionScopedVar); // Output: I am function scoped
// }

// myFunction();

// console.log(functionScopedVar); // Error: functionScopedVar is not defined


// function outer() {
//     let out = 'i am outer';
//     function inner() {
//         let innerVal = 'i am inner'
//         console.log(out);
//     }
//     // console.log(innerVal); error q ki outer me inner ko access nahi kar sakhte hai
//     inner()
// }
// outer()


// function outerFunction() {
//     let outerVariable = "I am outside!";

//     function innerFunction() {
//         console.log(outerVariable); // Output: I am outside!
//     }

//     return innerFunction;
// }

// const myInnerFunction = outerFunction();
// myInnerFunction();

// function outer() {
//     let count =0;
//     return function () {
//         count++
//         return count
//     }
// }
// let result = outer();
// console.log(result()); // 1
// console.log(result()); // 2
// console.log(result()); // 3


// (function () {
//     console.log("This is an IIFE");
// })();

// (function () {
//     console.log('fast');
// }());


// function add(x) {
//     return function (y) {
//         return x + y
//     }
// }
// const result = add(5);
// console.log(result(8));

// const result2 = add(10);
// console.log(result2(11));


// Implicit binding tab hoti hai jab function ek object ke method ke roop me call hota hai.

// const workshop = {
//     topic: 'JavaScript',
//     ask: function () {
//         console.log(this.topic);
//     }
// };

// workshop.ask(); // 'JavaScript'


// Explicit binding me, aap manually call ya apply method use karke this keyword ko bind karte ho.
// function greet() {
//     console.log(`Hello, ${this.name}`);
// }

// const person1 = { name: 'Alice' };
// const person2 = { name: 'Bob' };

// greet.call(person1); // 'Hello, Alice'
// greet.call(person2); // 'Hello, Bob'


// Default Binding: Jab function bina kisi specific context ke call hota hai.

// strick mode

// function askAgain() {
//     "use strict";
//     console.log(this.teacher);
// }

// askAgain(); // throws a TypeError


// function ask() {
//     console.log(this.teacher);
// }

// var teacher = "Kyle";

// ask(); // prints "Kyle"

class Workshop {
    constructor() {
        this.currentEnrollment = 0;
        this.studentRecords = [];
    }

    addStudent(student) {
        this.studentRecords.push(student);
        this.currentEnrollment++;
    }

    getEnrollment() {
        return this.currentEnrollment;
    }
}

let deepJS = new Workshop();
deepJS.addStudent({ id: 1, name: "John Doe" });
console.log(deepJS.getEnrollment()); // Output: 1