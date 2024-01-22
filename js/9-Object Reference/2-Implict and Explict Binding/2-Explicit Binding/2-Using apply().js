function introduceWithAge(age) {
    console.log(`Hello, my name is  ${this.name} and I am ${age} years old.`);
}

var person = {
    name: "Alice"
};

// Using apply() to explicitly set this to the person object and passing arguments as an array
introduceWithAge.apply(person, [25]); // Output: Hello, my name is Alice and I am 25 years old.