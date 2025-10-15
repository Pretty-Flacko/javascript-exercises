const fibonacci = function(num) {
    num = parseInt(num);
    if (num < 0) {
        return "OOPS";
    } else if (num < 2) return num;
    let a = 1, b = 1;
    for (let i = 2; i < num; i++) {
        [a, b] = [b, a + b];
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
