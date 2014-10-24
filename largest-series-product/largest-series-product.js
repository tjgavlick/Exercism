'use strict';

function Series(input) {
    this.digits = input ? input.split('').map(function (el) { return Number(el); }) : [];
}

Series.prototype.slices = function (sliceSize) {
    if (sliceSize > this.digits.length) {
        throw new Error('Slice size is too big.');
    }
    var result = [];
    for (var i = 0; i <= this.digits.length - sliceSize; i++) {
        if (!result[i]) {
            result[i] = [];
        }
        for (var j = 0; j < sliceSize; j++) {
            result[i].push(this.digits[i + j]);
        }
    }
    return result;
};

Series.prototype.largestProduct = function (sliceSize) {
    var groups = this.slices(sliceSize);
    return groups.reduce(function (result, cur) {
        var tmp = cur.reduce(function (a, b) {
            return a * b;
        }, 1);
        return Math.max(result, tmp);
    }, 0);
};

module.exports = Series;