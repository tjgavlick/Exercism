'use strict';

function Squares(limit) {
    this.limit = limit;
    Object.defineProperties(this, {
        'squareOfSums': {
            'get': function () {
                var result = 0,
                    i = this.limit + 1;
                while (i--) {
                    result += i;
                }
                return result * result;
            }
        },
        'sumOfSquares': {
            'get': function () {
                var result = 0,
                    i = this.limit + 1;
                while (i--) {
                    result += i * i;
                }
                return result;
            }
        },
        'difference': {
            'get': function () {
                return this.squareOfSums - this.sumOfSquares;
            }
        }
    });
}

module.exports = Squares;
