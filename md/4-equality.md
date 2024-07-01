> # Equality
The Equality operator (==) checks whether its two operands are equal, returning a Boolean result. Unlike the Strict equality operator, it attempts to convert and compare operands that are of different types.

Equality provides 3 types of comparison:

1. (==) Loose Equality.
2. (===) Strict Equality.
3. Object.is()

## Loose Equality (==)
Double equals (==) will perform a type of conversion when comparing two things and will handle NaN, -0, and +0 specially to conform to IEEE 754 (so NaN != NaN, and -0 == +0).

## Strict Equality (===)
Triple equals (===) will do the same comparison as double equals (including the special handling for NaN, -0, and +0) but without type conversion; if the types differ, false is returned.

## Object.is()
Object.is() does no type conversion and no special handling for NaN, -0, and +0 (giving it the same behavior as === except on those special numeric values).


For Example:
```Javascript
console.log(11 == '11');
// true. It checks only the values not types.
console.log(11 === '11');
// false. It also checks data types along with values.

```

Loose Equality (==) Allows Coercion when the data types are different.

Loose Equality (==) Compares Only Primitives. Whenever we use it with non-primitives, they are converted into primitives.

Strict Equality (===) disallows Coercion if the data types are the same.

## For More Information Click Below:-

[Equality](../js/4-Equality/)