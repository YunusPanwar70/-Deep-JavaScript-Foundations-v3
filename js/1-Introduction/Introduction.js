let num = 40;

num++; // Postfix increment: Returns the current value (40) and then increments num
console.log(num); // Output: 41

++num; // Prefix increment: Increments num first, then returns the new value
console.log(num); // Output: 42

let num2 = '5';
num2 = num2 + 1; // Concatenates the string '5' with the number 1 (Old Concept)
num2 += 1; // Concatenates the string '5' with the number 1
console.log(num2); // Output: '51'

num2++; // Postfix increment: Coerces the string '51' into a number and then increments it
console.log(num2); // Output: 52