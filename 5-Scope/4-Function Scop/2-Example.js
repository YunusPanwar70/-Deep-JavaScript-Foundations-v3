function exampleFunction2() {
    if (true) {
        var localVarInBlock = "I am a local variable inside a block";
        console.log(localVarInBlock);
    }

    console.log(localVarInBlock);
}

exampleFunction2();

// Outputs:
// "I am a local variable inside a block"
// "I am a local variable inside a block"