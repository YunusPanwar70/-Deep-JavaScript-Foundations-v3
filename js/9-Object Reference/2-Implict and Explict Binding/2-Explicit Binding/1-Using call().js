function introduce() {
    console.log(`Hello, my name is ${this.name}`);
}

var person = {
    name: "John"
};

// Using call() to explicitly set this to the person object
introduce.call(person); // Output: Hello, my name is John