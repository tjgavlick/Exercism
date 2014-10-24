'use strict';

function Triplet() {
    this.sides = Array.apply(null, arguments).slice(0, 3).sort();
}

// returns sum of a Triplet's sides
Triplet.prototype.sum = function () {
    return this.sides.reduce(function (sum, cur) {
        return sum + cur;
    }, 0);
};

// returns product of a Triplet's sides
Triplet.prototype.product = function () {
    return this.sides.reduce(function (result, cur) {
        return result * cur;
    }, 1);
};

// determines if a Triplet is pythagorean (a**2 + b**2 === c**2)
Triplet.prototype.isPythagorean = function () {
    return Math.pow(this.sides[2], 2) === Math.pow(this.sides[0], 2) + Math.pow(this.sides[1], 2);
};

// returns an array of Triplets fitting given parameters
Triplet.where = function (options) {
    // is there a better way to extend options objects in vanilla js?
    var maxFactor = options.maxFactor || 5,  // set default bounds to accommodate 3,4,5 triangle
        minFactor = options.minFactor || 3,
        result    = [];

    baseFactor: for (var a = minFactor; a < maxFactor; a++) {
        for (var b = a + 1; b < maxFactor; b++) {
            var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
            if (c > maxFactor) {
                continue baseFactor;
            }
            if (c % 1 === 0) {
                result.push(new Triplet(a, b, c));
            }
        }
    }

    if (options.sum) {
        result = result.filter(function (triplet) {
            return triplet.sum() === options.sum;
        });
    }

    return result;
};

module.exports = Triplet;