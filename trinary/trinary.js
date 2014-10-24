function Trinary(val) {
    this._val = val.toString();
}


Trinary.prototype.toDecimal = function() {
    if (!Number(this._val))
        return 0;

    return Number(this._val.split('').reverse().reduce(function(sum, cur, i) {
        return sum + cur * Math.pow(3, i);
    }, 0));
};


module.exports = Trinary;
