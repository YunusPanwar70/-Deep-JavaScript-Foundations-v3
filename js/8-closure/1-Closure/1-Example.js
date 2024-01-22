function outerFunction(outerVariable) {
    // Inner function (closure) definition
    function innerFunction(innerVariable) {
        // Accessing both outer and inner variables
        console.log("Outer Variable:", outerVariable);
        console.log("Inner Variable:", innerVariable);
    }

    // Returning the inner function (closure)
    return innerFunction;
}

// Creating a closure by calling outer function
const closure = outerFunction("I am from the outer function");

// Calling the closure (inner function)
closure("I am from the inner function");