function closureExample() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
}

const closure = closureExample();
closure(); // "I am from outer function" ko print karega