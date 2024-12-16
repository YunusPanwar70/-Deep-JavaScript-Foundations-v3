// https://github.com/denysdovhan/wtfjs#-is-truthy-but-not-true

// Question 1
// let a = {
//     name: "hello",
// };

// let b = {
//     name: "hello",
// };

// console.log(a == b); // false
// console.log(a === b); // false

// Question 2
// var x = 40;
// console.log(x); // 40
// x++; // 40
// console.log(x); // 41
// ++x; // 42
// console.log(x); // 42

// Question 3
// x = "40";
// y = x + 1;
// console.log(y); // 401
// y = x - 1;
// console.log(y); // 39

// // Question 4

// There are 2 types
// 1. Primitive  2. Non Primitive
// Primitives
// String, Number, Boolean , Bigint, Symbol , Null, Undefined
// Non Primitives
// Array, Object, Function, Classs;

// let x = 0;
// console.log(null == x);  // null aur 0 ko compare karte waqt, null ko type conversion nahi hota.

// let x = [];
// console.log(Array.isArray(x));

// function fn() { }
// console.log(typeof fn);

// var x;
// console.log(x);
// x = 5; // undefined
let x = [];
// let y = x;
// let z = [];
// console.log(x == y);
// console.log(x == z);
// console.log(y == z);

// console.log(x === y);
// console.log(x === z);
// console.log(y === z);
x.push(5);
console.log(x);
// console.log(y);
// console.log(z);

// console.log(Object.is(-0, 0));

// const str = "a";
// console.log(+str);
// console.log(Number(str));
// console.log(parseInt(str));
// console.log(parseFloat(str));

// console.log(1 < 2);
// console.log(2 < 3);
// console.log(1 < 2 < 3);
// console.log(3 > 2 > 1);

// console.log(10 === 10);
// console.log([] == true);

// console.log(null == undefined);
// console.log(null === undefined);

// console.log(try2 == 10);
// let try2  = 10 // reference error;
// console.log({} == true);