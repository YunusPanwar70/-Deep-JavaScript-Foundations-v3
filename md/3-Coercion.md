> # Coercion

Coercion ka matlab hai value ko automatic type conversion karna.

lekin agar galat tareeke se samjha jaaye toh bugs ka reason bhi ban sakta hai.

Coercion is conversion of one data type to another data type.

Coercion is divided into 2 types :-

1. ## Implict Coercion:-

Implict Coerciion is conversion one data type to another data type __automatically__.

For Example:-

```javascript
const num = '20';

console.log(50 + num); // 5020

console.log(50 - num)  // 30
```

In first line Number is converted into string;

In Second line String is converted into number;

* For Another Instance.

```javascript
var a = '20';
a = a + 1; 
console.log(a) // 201
a++ // increment using postFix Position. It will converted data type string to number.
console.log(a) // 202 

```

2. ## Explict Coercion

Explict Coercion is convertion one data type to another data type manually and it's provided by __Inbuilt Methods__.

___For Example___:- We Converting String to number by using Inbuilt Function __Number()__.

```javascript
const num2 = '20';

const val = Number(num2);

console.log(val); // 20

```

## For More Information Click Below:-

[Coercion](../js/3-Coercion/)