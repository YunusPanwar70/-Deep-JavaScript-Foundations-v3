var factorial = function fact(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
};

// Calling the recursive function
console.log(factorial(5)); // Output: 120