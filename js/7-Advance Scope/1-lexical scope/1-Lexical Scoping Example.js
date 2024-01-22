function outerFunction() {
    // Variable defined in the outer function
    const outerVariable = "I am from the outer function";

    function innerFunction() {
        // Accessing the outer variable
        console.log(outerVariable);
    }

    // Call the inner function
    innerFunction();
}

// Call the outer function
outerFunction();