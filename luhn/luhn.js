'use strict';

function Luhn(val) {
    this.val = val.toString();
    Object.defineProperties(this, {
        'checkDigit': {
            'get': function () {
                return Number(this.val[this.val.length - 1]);
            }
        },
        'addends': {
            'get': function () {
                return this.val.split('').reverse().map(function (digit, index) {
                    digit = Number(digit);
                    if (index % 2 !== 0) {
                        digit *= 2;
                        if (digit >= 10) {
                            digit -= 9;
                        }
                    }
                    return digit;
                }).reverse();
            }
        },
        'checksum': {
            'get': function () {
                return this.addends.reduce(function (sum, cur) {
                    return sum + cur;
                }, 0);
            }
        },
        'valid': {
            'get': function () {
                return this.checksum % 10 === 0;
            }
        }
    });
}

Luhn.create = function (num) {
    var testLuhn = new Luhn(num.toString() + '0');
    while (!testLuhn.valid) {
        testLuhn.val = (Number(testLuhn.val) + 1).toString();
    }
    return Number(testLuhn.val);
};

module.exports = Luhn;