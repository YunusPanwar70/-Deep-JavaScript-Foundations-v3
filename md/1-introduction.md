# Introduction

* We will see the introduction of it with some basic codes of js.

```Javascript

let num = 40;

num++; // This is called a postfix increment. It returns the current value (40), then increments num.
console.log(num); // Output: 41

++num; // This is called a prefix increment. It increments num first, then returns the new value.
console.log(num); // Output: 42
```

_Whenever We increment a num using __postfixed position__ it will be return the value first, after that he will be increment the num_.

_Whenever we will use __pre increment__ position for increment a num. it will increment num first, after that he will be return value_.

---
here is a string which is representing a num;

_Whenever we use __num2 = num2 + 1__ it will not increment a number it will be concat to that string_.

_Whenever we use postfixed position it will be increment to that string number but the main thing is it will change the data type of it string to number automatically_.

```Javascript
let num2 = '5';
num2 = num2 + 1; // '51'
num2 += 1; // '51' (This is a shorthand trick)
num2++; // 51 (coerces the string into a number and then increments it)
console.log(num2); // 52
```

_Whenever We increment a num using __Post-decrement position__ it will be return the value first, after that he will be increment the num_.

``` javascript
let x = 5;
let y = x--; // y is 5, and then x becomes 4

console.log(x); // 4
console.log(y); // 5
```

_Whenever we will use __Pre-decrement__ position for increment a num. it will increment num first, after that he will be return value_.
``` javascript
let x = 5;
let y = --x; // x becomes 4, and y is also 4

console.log(x); // 4
console.log(y); // 4
```
## For More Information Click Below:-

[Introductions](../js/1-Introduction/)