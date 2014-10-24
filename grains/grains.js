function Grains() {}

Grains.prototype.square = function(num) {
    return Math.pow(2, num - 1);
};

Grains.prototype.total = function() {
    var result = 0;
    for (var i = 1; i <= 64; i++) {
        result += this.square(i);
    }
    return result;
};

module.exports = Grains;