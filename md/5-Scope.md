# Scopes

Scopes in JavaScript refer to the current context of code, which determines the accessibility of variables.

JavaScript has the following kinds of scopes:

1. Global Scope
2. Module Scope
3. Function Scope
4. Block Scope
5. Lexical Scope

## Global Scope
Variables defined outside any function, block, or module scope are accessible everywhere in the application. When a module system is enabled, it's harder to make global variables, but it can still be done. By defining a variable in HTML, outside any function, a global variable can be created.

## Module Scope
Before modules, a variable declared outside any function was a global variable. In modules, a variable declared outside any function is hidden and not available to other modules unless it is explicitly exported.

## Block Scope
Block scope is defined with curly braces, separated by `{` and `}`. Variables declared with `let` and `const` can have block scope. They can only be accessed in the block in which they are defined.

## Function Scope
Function scope means that parameters and variables defined in a function are visible everywhere within the function but are not visible outside of the function.

## Lexical Scope
Lexical scope is the ability of the inner function to access the outer scope in which it is defined.

## For More Information Click Below :-

[Scopes](../js/5-Scope/)