'use strict';

function Octal(octalString) {
    this.val = octalString || '';
}

Octal.prototype.toDecimal = function () {
    if (!Number(this.val)) {
        return 0;
    }

    return Number(this.val.split('').reverse().reduce(function (sum, cur, i) {
        return sum + cur * Math.pow(8, i);
    }, 0));
};

module.exports = Octal;