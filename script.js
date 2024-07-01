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
// Example of a class in JavaScript

// console.log(typeof null); object ka refrence hatane ke liye kaam aata hai 
// console.log(typeof undefined); varibale ki value mitan ek liye
// console.log(NaN === NaN); // har 1 NaN apne aap me 1 unique value h && NaN number hone ke baad bhi object h

// console.log(isNaN(NaN)); // false 0 hota hai to isNaN cursion perform kar ke false karega q ki yeh number ko dalse karta hai.

// let a = -0;
// console.log(a.toString()); // 0 ish liye string conversion me 0 ya -0  "0" banta hai q ki yeh javaScript ka behviour h

// console.log(Object.is(-0 === 0)); // yeh strict equal se bhi jyada strictly check karta 

// console.log(0 === -0); // methametical  hi same value h ish liye true deta h    

// console.log(Object.is(NaN, NaN));  // object is pure equalit check ke liye banaya gya h jo strick equality se bhi high 

// Kab new Keyword Use Karna Hai
// Yeh objects new keyword ke saath use kiye jate hain jab aapko unke fundamental type ka object banana hota hai. In objects ko new ke saath use karna zaroori hai: 

// &&

// new Object banane me kya our new memory me kaam aata jata hai 

// Kab new Keyword Use Nahi Karna Hai
// Yeh objects new ke saath use nahi karne chahiye:

// String
// Number
// Boolean


// Abstract Operations => yeh js ki documentry h jo js khud se data type ko convert krne me help karte hai



// Abstract operations conceptual algorithms hote hain jo type conversion handle karte hain.
// Coercion ka matlab hai ek type se doosre type me conversion.
// ToPrimitive algorithm non-primitive values ko primitive me convert karta hai, hint ke basis par.
// ToPrimitive ke liye valueOf() aur toString() methods use hote hain.
// Agar primitive result nahi milta, to algorithm recursively call hota hai.

// Falsy value are 6 type : "", 0, null, NaN, false, undefined


// 1. Boxing
// Concept Explanation:
// Boxing JavaScript mein ek implicit coercion ka form hai jahan ek primitive value ko temporary object mein convert kar diya jata hai taaki uspar methods aur properties ko access kiya ja sake.

// function isValidName(name) {
//     return typeof name === 'string' && name.trim().length >= 3
// }

// console.log(isValidName('John Doe'));
// console.log(isValidName(' '));
// console.log(isValidName('A'));

// function hoursAttended(attended, length) {
//     attended = Number(attended);
//     length = Number(length)
//     return Number.isInteger(attended) && Number.isInteger(length) && attended >= 0 && length >= 0 && attended <= length
//     // return Number.isInteger(attended) && Number.isInteger(length) && attended >= 0 && length >= 0 && attended <= length;
// }
// console.log(hoursAttended("5", "6")); // true
// console.log(hoursAttended(3, 3)); // true
// console.log(hoursAttended(3.5, 4)); // false
// console.log(hoursAttended("0", "0")); // true
// console.log(hoursAttended("10", "10")); // true
// console.log(hoursAttended("11", "10")); // false


// var obj1 = { value: 10 };
// var obj2 = { value: 10 };

// console.log(obj1.value == obj2); // false, kyunki objects reference ke hisaab se compare hote hain

// var obj1 = { value: 10, toString: function() { return this.value; } };
// var obj2 = { value: 10, toString: function() { return this.value; } };

// console.log(obj1 == obj2); // true, kyunki toString se convert karne ke baad values compare hoti hain

// [42] == 42 // true (Array [42] converts to "42" and then to 42)
// console.log([42] === 42); array our object ko reffrens chaiye to strict equality me refrense nahi h to error dega

// console.log([] == ![]); // true
// pehle [] yaha cursion perform hoga empty array ko string me convert karega our ![] ish ko 0 me to dono equal nahi h to true aayega  

// function outer() {
//     let outerVar = 'I am outside!';

//     function inner() {
//         console.log(outerVar); // 'I am outside!'
//     }

//     inner();
// }
// outer();


// function example() {
//     if (true) {
//         var x = 10;
//         let y = 20;
//     }
//     console.log(x); // Output: 10
//     console.log(y); // ReferenceError: y is not defined
// }