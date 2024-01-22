// In the global context
function showGlobalContext() {
    console.log(this); // Output: [object Window] (or [object global] in Node.js)
}

// Calling the function
showGlobalContext();  