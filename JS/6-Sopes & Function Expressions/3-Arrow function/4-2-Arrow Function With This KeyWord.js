const RegularFunction = function () {
    this.value = 42;
};

const ArrowFunction = () => {
    this.value = 42; // Error: Arrow functions do not have their own 'this'
};

const regularInstance = new RegularFunction(); // This works
const arrowInstance = new ArrowFunction(); // Error  