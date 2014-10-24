function Binary(val) {
    this._val = Number(val) || 0;
}

Binary.prototype.toDecimal = function() {
    return this._val.toString().split('').reverse().reduce(function(sum, cur, index) {
        return sum + cur * Math.pow(2, index);
    }, 0);
};

module.exports = Binary;