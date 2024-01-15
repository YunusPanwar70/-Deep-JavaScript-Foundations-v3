let zero = -0;
console.log(zero);

let trip_x = 0 === zero;
console.log(trip_x);

// When we convert negative number to string it will be remove the negative things and return only value
console.log(zero.toString());
console.log(zero > 0);
console.log(zero < 0);
console.log(Object.is(zero, -0)); //-0 is equal to itself
console.log(Object.is(zero, 0)); //false bcz -0 is not equal to 0