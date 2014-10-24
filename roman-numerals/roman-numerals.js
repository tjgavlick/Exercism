function toRoman(number) {
    number = number.toString().split('').reverse();
    var result = '',
        numerals = [
            { unit: 'I', half: 'V', ten: 'X' },
            { unit: 'X', half: 'L', ten: 'C' },
            { unit: 'C', half: 'D', ten: 'M' },
            { unit: 'M', half: 'V\u0305', ten: 'X\u0305' }
        ];

    function prepend(addition) {
        result = addition + result;
    }

    // because what's the fun in a straight key lookup?
    number.forEach(function(digit, index) {
        var scale = numerals[index];
        if (digit == 0) {
            //
        } else if (digit <= 3) {
            for (var i = 0; i < digit; i++) { prepend(scale.unit); }
        } else if (digit == 4) {
            prepend(scale.unit + scale.half);
        } else if (digit == 5) {
            prepend(scale.half);
        } else if (digit <= 8) {
            for (var i = 5; i < digit; i++) { prepend(scale.unit); }
            prepend(scale.half);
        } else {
            prepend(scale.unit + scale.ten);
        }
    });

    return result;
}

module.exports = toRoman;