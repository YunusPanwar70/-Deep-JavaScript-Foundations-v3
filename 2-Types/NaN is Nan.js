// NaN => Everyone say that NaN means (Not a Number) but it's totally wrong. NaN indicates an valid number.

// For Examples => 

let myAge = Number("0o46"); //38
console.log(isNaN(myAge)); //false

const myNextAge = ("39"); //39
console.log(isNaN(myNextAge)); //false

let myCastsAge = Number("n/a"); //NaN
console.log(isNaN(myCastsAge)); //true

myCastsAge === myCastsAge; //false (===) It tells you that two things are not equal.