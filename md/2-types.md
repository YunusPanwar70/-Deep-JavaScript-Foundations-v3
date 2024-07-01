> # Types
There are two categories of data types :

1. Primitive Data Types.
2. Non-Primitive Data Types.

## Primitive Data Types : Immutable
Primitive data types do not have any methods or properties.

#### Values in these data types cannot be changed :

- BigInt : Yeh future mein aane wala primitive type hai jo bade integers ko handle karne ke liye use hoga.
- Boolean : Refers only to two values - true and false.
- Number : Refers to all numerical values.
- Null : The type itself is null, and it is a fundamental primitive data type in JavaScript.
- String : Defined within double quotes or single quotes.
- Symbol : Used to define keys of objects.
- Undefined : It has only one value, which is undefined. It means the variable is not defined.

## Non-Primitive Data Types : Mutable
#### Values in these data types can be changed :

- Array : Arrays are also objects, but they have unique behavior such as numeric indexing and a length property.

```Javascript
let num = [1,2,3];
console.log(num); // Output : [1,2,3];

num[0]='one';
console.log(num); // Output : ['one',2,3];
```

- Functions : In JavaScript, functions are treated as objects' subtypes. They come with specific behaviors.
- Object : Objects have multiple subtypes, but they are not primitive types. Objects have distinct behaviors and characteristics.

## For More Information Click Below  :-

[Types](../js/2-Types/)