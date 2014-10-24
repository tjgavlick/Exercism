Number.prototype.roundTo = function(decimals) {
    var factor = Math.pow(10, decimals);
    return Math.round(this * factor) / factor;
};

function SpaceAge(seconds) {
    this.seconds = seconds;
    this.earthYears = seconds / 31557600;
}

// 31557600 seconds per year
SpaceAge.prototype.onEarth = function() {
    return this.earthYears.roundTo(2);
};

// Mercury: orbital period 0.2408467 years
SpaceAge.prototype.onMercury = function() {
    return (this.earthYears / 0.2408467).roundTo(2);
};

// Venus: orbital period 0.61519726 years
SpaceAge.prototype.onVenus = function() {
    return (this.earthYears / 0.61519726).roundTo(2);
};

// Mars: orbital period 1.8808158 years
SpaceAge.prototype.onMars = function() {
    return (this.earthYears / 1.8808158).roundTo(2);
};

// Jupiter: orbital period 11.862615 years
SpaceAge.prototype.onJupiter = function() {
    return (this.earthYears / 11.862615).roundTo(2);
};

// Saturn: orbital period 29.447498 years
SpaceAge.prototype.onSaturn = function() {
    return (this.earthYears / 29.447498).roundTo(2);
};

// Uranus: orbital period 84.016846 years
SpaceAge.prototype.onUranus = function() {
    return (this.earthYears / 84.016846).roundTo(2);
};

// Neptune: orbital period 164.79132 years
SpaceAge.prototype.onNeptune = function() {
    return (this.earthYears / 164.79132).roundTo(2);
};

module.exports = SpaceAge;