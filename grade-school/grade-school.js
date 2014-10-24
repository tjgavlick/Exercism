function School() {
    this._roster = Object.create(null);
};

// get: entire roster
School.prototype.roster = function() {
    return this._roster;
};

// get: entire grade
School.prototype.grade = function(grade) {
    return this._roster[grade] || [];
};

// add to roster
School.prototype.add = function(name, grade) {
    this._roster[grade] ? this._roster[grade].push(name) : this._roster[grade] = [name];
    this._roster[grade].sort();
};

module.exports = School;