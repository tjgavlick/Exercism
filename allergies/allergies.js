function Allergies(score) {
    this._score = score;
    this._allergens = [ 'eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats' ];
}

Allergies.prototype.list = function() {
    var result = [],
        tmpScore = this._score,
        index = 0;

    while (Math.pow(2, index) < this._score)
        index++;

    for (; index >= 0; index--) {
        var value = Math.pow(2, index);
        if (tmpScore - value >= 0) {
            tmpScore -= value;
            if (this._allergens[index])
                result.push(this._allergens[index]);
        }
    }

    return result.reverse();
};

Allergies.prototype.allergicTo = function(item) {
    if (this._score === 0)
        return false;
    return this.list().indexOf(item) >= 0;
};

module.exports = Allergies;