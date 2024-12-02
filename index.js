// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback(); // Invokes the callback function
}

// Function that returns a named function
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("This is a named function!");
    };
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return () => {
        console.log("This is an anonymous function!");
    };
}

// Exporting the functions (if tests require exports)
module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };

