function PhoneNumber(rawString) {
    this.rawString = rawString;
}

PhoneNumber.prototype.number = function() {
    var digits = this.rawString.replace(/\D/g, '');
    
    if (digits.length < 10 || digits.length > 11 || (digits.length === 11 && digits[0] !== '1'))
        return '0000000000';

    if (digits.length === 11)
        digits = digits.slice(1);

    return digits;
};

PhoneNumber.prototype.areaCode = function() {
    return this.number().slice(0,3);
};

PhoneNumber.prototype.toString = function() {
    var number = this.number();
    return '(' + number.slice(0,3) + ') ' + number.slice(3,6) + '-' + number.slice(6);
};

module.exports = PhoneNumber;