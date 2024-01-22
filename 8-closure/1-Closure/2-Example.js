function setupEventListener() {
    var count = 0;

    document.getElementById("myButton").addEventListener("click", function () {
        // Accessing the count variable from the outer function
        count++;
        console.log("Button clicked", count, "times");
    });
}

// Call the setupEventListener function
setupEventListener();