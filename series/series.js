'use strict';

function Series(string) {
    this.string = string;
    this.digits = string.split('').map(function (digit) { return Number(digit); });
}

Series.prototype.slices = function (size) {
    if (size > this.digits.length) {
        throw new Error('Slice size is too big.');
    }

    var result = [],
        limit = this.digits.length - size;

    for (var i = 0; i <= limit; i++) {
        result[i] = result[i] || [];
        for (var j = i; j < i + size; j++) {
            result[i].push(this.digits[j]);
        }
    }
    return result;
};

module.exports = Series;
