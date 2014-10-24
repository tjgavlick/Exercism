function randomLetters(iterations) {
    iterations = iterations || 1;
    var result = '';

    for (var i = 0; i < iterations; i++) {
        result += Math.random().toString(36).replace(/\d/g, '').slice(-1).toUpperCase();
    }
    return result;
}

function randomDigits(iterations) {
    iterations = iterations || 1;
    var result = '';

    for (var i = 0; i < iterations; i++) {
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

function robotName() {
    return randomLetters(2) + randomDigits(3);
}

function Robot() {
    this.name = robotName();
}

Robot.prototype.reset = function() {
    this.name = robotName();
};

module.exports = Robot;