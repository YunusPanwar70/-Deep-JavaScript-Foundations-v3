function outerFunction() {
    // Variable defined in the outer function
    const outerVariable = "I am from the outer function";

    function innerFunction() {
        // Accessing the outer variable
        console.log(outerVariable);

        // New variable defined in the inner function
        const innerVariable = "I am from the inner function";
        console.log(innerVariable);
    }

    // Call the inner function
    innerFunction();

    // Accessing the inner variable from the outer function (will result in an error)
    // console.log(innerVariable); // Error: innerVariable is not defined in the outer function's scope
}

// Call the outer function
outerFunction();