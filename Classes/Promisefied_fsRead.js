const fs = require("fs");

function readTheFile(sendTheFinalValueHere) {
    //do your thing, whatever u have the final value, call sendTheFinalValueHere("finalValue");
    fs.readFile("a.txt", "utf-8", function(err, data) {
        sendTheFinalValueHere(data);
    }) 
}

function readFile(fileName) {
    // read the file and return its value
    return new Promise(readTheFile);
}

const p = readFile("a.txt");

function callback(contents) {
    console.log(contents);
}
p.then(callback);