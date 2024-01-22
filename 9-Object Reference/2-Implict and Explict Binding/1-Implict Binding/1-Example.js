// Object definition
var person = {
    name: "John",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Calling the method using dot notation
person.greet(); // Output: Hello, my name is John