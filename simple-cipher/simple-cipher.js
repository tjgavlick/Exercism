'use strict';

// assigns a numerical value to a lowercase letter (0 to 25)
function getLetterValue(letter) {
    var base = 'a'.charCodeAt(0);  // get reference point in encoding
    return letter.charCodeAt(0) - base;
}


// gets a lowercase letter from its numerical value (0 to 25)
function getLetterFromValue(value) {
    var base = 'a'.charCodeAt(0);  // get reference point in encoding
    return String.fromCharCode(value + base);
}


// addition and subtraction operations on lowercase letter characters
function combineLetters(a, b, op) {
    var valA = getLetterValue(a),  // get values we can do math with
        valB = getLetterValue(b),
        result;

    // perform operation
    if (op === 'subtract') {
        result = valA - valB;
    } else {
        result = valA + valB;
    }

    // account for overflow
    while (result < 0) {
        result += 26;
    }
    while (result >= 26) {
        result -= 26;
    }

    return getLetterFromValue(result);
}


function Cipher(key) {
    if (/[^a-z]/.test(key) || key === '') {  // would rather generate key on empty string, but
        throw new Error("Bad key");
    }
    this.key = key || this.generateKey();
}


// generates 100 random characters
Cipher.prototype.generateKey = function () {
    var result = '';
    while (result.length < 100) {
        result += getLetterFromValue(Math.floor(Math.random() * 26));
    }
    return result;
};


// adds key to string
Cipher.prototype.encode = function (string) {
    var result = '',
        key = this.key;
    string.split('').forEach(function (char, i) {
        result += combineLetters(char, key[i]);
    });
    return result;
};


// substracts key from string
Cipher.prototype.decode = function (string) {
    var result = '',
        key = this.key;
    string.split('').forEach(function (char, i) {
        result += combineLetters(char, key[i], 'subtract');
    });
    return result;
};


module.exports = Cipher;