// // 7 premitive data type
// // string
// // number
// // boolean;
// // undifind
// // sybol
// // null
// // being

// // no premitive data type
// // Array
// // function
// // object


// console.log(typeof [1, 2, 3]);

// console.log(typeof null);

// console.log(typeof typeof 10);

// console.log(typeof Number(false));

// a = "arbaaz";
// console.log(a);

// let a;
// console.log(a);

// let a = Number("hello");
// console.log(a * 10);

// let b = "arbaaz";
// console.log(b * 10); // NaN

// console.log(typeof NaN);

// console.log(NaN === NaN);

// console.log(isNaN(1 === true))


// let a = 10;

// console.log(isNaN(a));

// console.log(Number.isNaN("this is NaN"));

// let a = String(10);
// console.log(a);

// let b = "10";
// console.log(+b); // number

// (function add(a, b) {
//     return a + b;
// })(10, 10)

// console.log(a);
// let a = 10;

// console.log("2" === 2);

// console.log(![] == false);

// "2" === 2
// "2" == 2
// [] == 0


// ![] == false


// let number = 0;
// console.log(number++);
// console.log(++number);
// console.log(number);
// A: 1 1 2
// B: 1 2 2
// C: 0 2 2
// D: 0 1 2


// function sum(a, b) {
//     return a + b;
// }

// sum(1, '2');
// A: NaN
// B: TypeError
// C: "12"
// D: 3
// function getAge() {
//     'use strict';
//     age = 21;
//     console.log(age);
// }

// getAge();
// A: 21
// B: undefined
// C: ReferenceError
// D: TypeError


// var num = 8;
// var num = 10;

// console.log(num);
// A: 8
// B: 10
// C: SyntaxError
// D: ReferenceError


// for (let i = 1; i < 5; i++) {
//     if (i === 3) continue;
//     console.log(i);
// }
// A: 1 2
// B: 1 2 3
// C: 1 2 4
// D: 1 3 4


// !!null;
// !!'';
// !!1;
// A: false true false
// B: false false true
// C: false true true
// D: true true false

//     + true;
// !'Lydia';

// A: 1 and false
// B: false and NaN
// C: false and false

// let a = 3;
// let b = new Number(3);
// let c = 3;

// console.log(a == b);
// console.log(a === b);
// console.log(b === c);
// A: true false true
// B: false false true
// C: true false false
// D: false true true


// console.log([] == ![]);

// console.log(!!"false" == !!"true");

// console.log(false == 0);

// console.log(!![]);

// console.log(!!null);

// let num = "123";
// let num2 = 123;
// console.log(num == num2);