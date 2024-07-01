> # Closure

Closures are defined as inner functions that have access to variables and parameters of outer function even after the outer function has returned. The below examples show the practical use of closures :


Closure ka practical definition yeh hai ki ek function apne lexical scope ke variables ko yaad rakhta hai aur unhe use kar sakta hai, even after the scope has ended.

Closures wo functions hote hain jo apne lexical scope ko "close" karke rakhte hain, matlab function ke execute hone ke baad bhi woh apne defining scope ke variables ko access kar sakte hain.

Lexical Scope: Variables sirf unke defined scope me hi accessible hote hain.
Closure: Variables closure ke through persist karte hain aur continue access kiya ja sakta hai.

```javascript
function mulFn() {
  var mul = 9;
  return function (val) {
    mul = mul * val;
    return mul;
  };
}

var mul = mulfn();
console.log(mul); // function anonymous
console.log(mul(13));
```

## Module Pattern

The module Pattern is one of the important patterns in Javascript. It is a commonly used Design Pattern which is used to wrap a set of varaibles and functions together in a single scope.

- It is used to define objects and specify the variables and the functions that can be accessed from outside the scope of the function.

- We expose certain properties and function as public and can also restirct the scope of properties and functions within the object itself, making them private.

- We can achieve data hiding an abrastraction using this pattern.

```javascript
function EmployeeDetails() {
  var name = "Mayank";
  var age = 30;
  var designation = "Developer";
  var salary = "50000";

  return {
    name: name,
    age: age,
    designation: designation,
  };
}

var newEmployee = EmployeeDetails();

var userName = newEmployee.name;
var userAge = newEmployee.age;
var userDesignation = newEmployee.designation;
var usersalary = newEmployee.salary;

console.log(userName);
console.log(userAge);
console.log(userDesignation);
console.log(newEmployee);
console.log(usersalary);
```

## For More Information Click Below :-

[closure and module](../js/8-closure/)