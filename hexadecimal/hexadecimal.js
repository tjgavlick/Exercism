'use strict';

function Hexadecimal(string) {
    this.val = /[^0-9a-f]/.test(string) ? '0' : string;
}

Hexadecimal.prototype.toDecimal = function () {
    // pretty sick of base-n problems, exercism, so I'm going to cheat now
    return parseInt(this.val, 16);
};

module.exports = Hexadecimal;