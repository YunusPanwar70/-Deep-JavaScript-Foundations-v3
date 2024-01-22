function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar);
    }

    innerFunction(); // "I am from outer function" ko print karega
}

outerFunction();