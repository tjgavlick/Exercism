function padInteger(num, size) {
    var result = num.toString();
    while(result.length < size) {
        result = '0' + result;
    }
    return result;
}

function Clock(hour, minute) {
    this._hour = hour;
    this._minute = minute || 0;
}

Clock.prototype.toString = function() {
    return padInteger(this._hour, 2) + ':' + padInteger(this._minute, 2);
};

Clock.prototype.plus = function(minutes) {
    this._minute += minutes;
    while (this._minute > 60) {
        this._minute -= 60;
        this._hour++;
    }
    while (this._hour >= 24) {
        this._hour -= 24;
    }
    return this;
};

Clock.prototype.minus = function(minutes) {
    this._minute -= minutes;
    while (this._minute < 0) {
        this._minute += 60;
        this._hour--;
    }
    while (this._hour < 0) {
        this._hour += 24;
    }
    return this;
};

Clock.prototype.equals = function(refClock) {
    return this.toString() === refClock.toString();
};

module.exports.at = function(hour, minute) { return new Clock(hour, minute); };