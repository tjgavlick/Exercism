function Triangle() {
    this._sides = Array.apply(null, arguments).slice(0,3).sort();
}

Triangle.prototype.kind = function() {
    if (this._sides[0] === 0)
        throw new RangeError('What triangle?');
    if (this._sides[0] <= 0 || this._sides[2] >= this._sides[0] + this._sides[1])
        return 'illegal';
    if (this._sides[0] === this._sides[1] && this._sides[1] === this._sides[2])
        return 'equilateral';
    if (this._sides[0] === this._sides[1] || this._sides[1] === this._sides[2])
        return 'isosceles';
    return 'scalene';
};

module.exports = Triangle;