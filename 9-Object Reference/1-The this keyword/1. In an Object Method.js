var person = {
    name: "John",
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Calling the object method
person.sayHello(); // Output: Hello, my name is John