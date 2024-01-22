function introduceWithLocation(location) {
    console.log(`Hello, my name is ${this.name} and I am from ${location}`);
}

var person = {
    name: "Bob"
};

// Using bind() to create a new function with this set to the person object and pre-set argument
var boundFunction = introduceWithLocation.bind(person, "New York");

// Calling the new function
boundFunction(); // Output: Hello, my name is Bob and I am from New York