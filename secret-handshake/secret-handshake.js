'use strict';

function SecretHandshake(code) {
    this.code = Number(code);
    if (!this.code) {
        throw new Error('Handshake must be a number');
    }
    this.sequence = code.toString(2).split('').slice(0, 5).map(function (el) { return Number(el); });
    this.key = ['wink', 'double blink', 'close your eyes', 'jump'];
}

SecretHandshake.prototype.commands = function () {
    var result = [],
        key = this.key;
    this.sequence.reverse().forEach(function (el, i) {
        if (i === 4 && el) {
            result.reverse();
            return;
        }
        if (el) {
            result.push(key[i]);
        }
    });
    return result;
};

module.exports = SecretHandshake;
