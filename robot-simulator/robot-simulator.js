'use strict';

var bearings = ['north', 'east', 'south', 'west'];

function Robot() {
    this.coordinates = [0, 0];
    this.bearing = bearings[0];
}


// Robot modifiers
// ===============

// sets our Robot to a given compass bearing
Robot.prototype.orient = function (direction) {
    if (bearings.indexOf(direction) < 0) {
        throw 'Invalid Robot Bearing';  // format requested by unit test
    }
    this.bearing = direction;
};

// place Robot at (x, y) on hypothetical grid
Robot.prototype.at = function (x, y) {
    this.coordinates = [x, y];
};

// shorthand to combine both .at() and .orient()
Robot.prototype.place = function(options) {
    if (options.x && options.y)
        this.at(options.x, options.y);
    if (options.direction)
        this.orient(options.direction);
};


// Robot actions
// =============

// turn Robot left or right
Robot.prototype.turnRight = function () {
    this.bearing = modifyBearing(this.bearing, 'R');
};

Robot.prototype.turnLeft = function () {
    this.bearing = modifyBearing(this.bearing, 'L');
};

// moves one grid space in the direction of current bearing
Robot.prototype.advance = function () {
    if (this.bearing === 'north')
        this.coordinates[1]++;
    if (this.bearing === 'east')
        this.coordinates[0]++;
    if (this.bearing === 'south')
        this.coordinates[1]--;
    if (this.bearing === 'west')
        this.coordinates[0]--;
};

// execute a string of shorthand commands
Robot.prototype.evaluate = function (string) {
    var sequence = this.instructions(string),
        that = this;
    sequence.forEach(function (fnName) {
        that[fnName]();
    });
};


// Robot helpers
// =============

// maps a string of shorthand commands to a sequence of function names
Robot.prototype.instructions = function (string) {
    var instructionMap = {
        L: 'turnLeft',
        R: 'turnRight',
        A: 'advance'
    };
    return string.split('').map(function (instruction) {
        return instructionMap[instruction] || null;
    });
};


// helper functions
// ================

// returns a given compass direction modified by turning 90 degrees left or right
function modifyBearing(bearing, direction) {
    var i = bearings.indexOf(bearing);
    if (i < 0 || (direction !== 'L' && direction !== 'R')) {
        return bearings[0];
    }
    if (direction === 'L') {
        return i === 0 ? bearings[bearings.length - 1] : bearings[i - 1];
    }
    if (direction === 'R') {
        return i === bearings.length - 1 ? bearings[0] : bearings[i + 1];
    }
}


module.exports = Robot;