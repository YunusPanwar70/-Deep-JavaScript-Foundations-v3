"use strict";

function showStrictContext() {
    console.log(this); // Output: undefined
}

// Calling the function
showStrictContext();