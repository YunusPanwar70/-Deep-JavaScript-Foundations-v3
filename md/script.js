// javascript
// var a = 10;
// var func = function() {
//     var b = 20;
//     console.log("a  and b is accessible(outer):", a, b);
//     var innerFunc = function() {
//         var c = 30;
//         console.log("a and b and c is accessible(inner)", a, b, c);
//     };
//     innerFunc();
//     return;
// };
// func();
// console.log("only a is a accessible (global):", a);
// Constructor function
function Person() {
    this.name = "yaseen";
    this.age = 23;
}

// Creating objects
const person1 = new Person();
const person2 = new Person();

// Logging the values of the objects
console.log("Person 1:", person1);
// console.log("Person 2:", person2);