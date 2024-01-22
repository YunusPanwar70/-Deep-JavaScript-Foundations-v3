var person1 = { name: "Alice" };
var person2 = { name: "Bob" };

function introduce() {
    console.log(`Hello, my name is ${this.name}`);
}

// Using call() to set this to person1
introduce.call(person1); // Output: Hello, my name is Alice

// Using apply() to set this to person2
introduce.apply(person2); // Output: Hello, my name is Bob

// Using bind() to create a new function with this set to person1
var person1Introduction = introduce.bind(person1);
person1Introduction(); // Output: Hello, my name is Alice