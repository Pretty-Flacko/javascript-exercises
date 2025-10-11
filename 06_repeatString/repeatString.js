const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let output = "";
    for (let i = 0; i < num; i++) {
        output = output.concat(string);
    }
    return output;
    
}

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
