function lexicalBlockScope() {
    if (true) {
        let blockVar = "I am from block scope";
        console.log(blockVar);
    }

    // console.log(blockVar); // Error! blockVar is not defined
}

lexicalBlockScope(); // "I am from block scope" ko print karega