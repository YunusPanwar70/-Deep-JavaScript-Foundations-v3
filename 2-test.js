//  Question 1

let a = {
    name: 'Hello'
};

let b = {
    name: 'Hello'
};

console.log(a == b); //false
console.log(a === b); //false

// Question 2

var x = 40;
console.log(x); //40 
x++; //40
console.log(x);//41
++x; //42
console.log(x);

// Question 3

x = '40';
y = x + 1;
console.log(y); //401
y = x - 1;
console.log(y); //39

//Question 4

let x = 0;
console.log(null == x);  //false

let x = [];
console.log(Array.isArray(x)); // true

function fn() {
    console.log(typeof fn); //function
}

var x;
console.log(x);
x = 5; //undefind
let x = [];
let y = x;
let z = [];

console.log(x == y); //true
console.log(x == z); //false
console.log(y == z); //false

console.log(x === y);
console.log(x === z);
console.log(y === z);

x.push(5);
console.log(x); //[5]
console.log(y); //[5]
console.log(z); //[]

console.log(Object.is(-0, 0)); //false

const str = "a";
console.log(+str); //Invalid number
console.log(Number(str)); //Invalid number  
console.log(parseInt(str));//Invalid number 
console.log(parseFloat(str));//Invalid number 

console.log(1 < 2); //ture
console.log(2 < 3); //true
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //false

console.log(10 === 10); //true
console.log([] == true); 
console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(try2 == 10);
let try2 = 10 // reference error;