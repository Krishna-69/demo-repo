function logName() {
    console.log("Krishna");
}

setTimeout(logName, 3000)

// callback based approach
// promise based approach

// Defining a promise is hard
// using a promise is easy

// A promise in javascript is an object that represents the eventual completion or failure of an asynchronous operation

// returns an object of the promise class
function setTimeoutPromisefied(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function callback() {
    console.log("3 seconds have passed");
}

setTimeoutPromisefied(3000).then(callback);

////////////////////////////////////////////////////////

function random() {
    
}

let p =  new Promise(random); // suppose to return something eventually

function callback() {
    console.log("promise succeded")
}
p.then(callback); 

