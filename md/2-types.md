> # Types
There are two categories of data types :

1. Primitive Data Types.
2. Non-Primitive Data Types.

## Primitive Data Types : Immutable
Primitive data types do not have any methods or properties.

#### Values in these data types cannot be changed :

- BigInt : Yeh future mein aane wala primitive type hai jo bade integers ko handle karne ke liye use hoga.

```Javascript
let myBigInt = 10n;
console.log(myBigInt); // 10n
```

- Boolean : Refers only to two values - true and false.
  
```Javascript
let isTrue = true;
let isFalse = false;
console.log(isTrue);  // true
console.log(isFalse); // false
```

- Number : Refers to all numerical values.

``` javascript
let numberVal = 42;
console.log(numberVal); // 42
```

- Null : The type itself is null, and it is a fundamental primitive data type in JavaScript.

```javascript
let nullVar = null;
console.log(nullVar); // null
```

- String : Defined within double ("Value") quotes or single quotes ('Value').

``` javascript
let stringVal = "Hello, World!";
console.log(stringVal); // "Hello, World!"
```
- Symbol : Used to define keys of objects & Unique identifiers ke liye use hota hai.

``` javascript
let symbolVar = Symbol('unique');
console.log(symbolVar); // Symbol(unique)
```

- Undefined : It has only one value, which is undefined. It means the variable is not defined.
``` javascript
let undefinedVar;
console.log(undefinedVar); // undefined
```
## Non-Primitive Data Types : Mutable
#### Values in these data types can be changed :

- Array : Arrays are also objects, but they have unique behavior such as numeric indexing and a length property.

```Javascript
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);         // [1, 2, 3, 4, 5]
console.log(myArray.length);  // 5

myArray[0] ='One'
console.log(myArray);  // Output: ['one', 2, 3, 4, 5]
```

- Functions : In JavaScript, functions are treated as objects' subtypes. They come with specific behaviors.

```javascript
function myFunction() {
  return "Hello from a function!";
}
console.log(myFunction()); // "Hello from a function!"
```
- Object : Objects have multiple subtypes, but they are not primitive types. Objects have distinct behaviors and characteristics && Complex data ko store karne ke liye use hota hai, jisme key-value pairs hote hain.

```javascript
let myObject = {
  key: "value",
  number: 42,
  isTrue: true
};
console.log(myObject); // { key: 'value', number: 42, isTrue: true }
```

## For More Information Click Below  :-

[Types](../js/2-Types/)