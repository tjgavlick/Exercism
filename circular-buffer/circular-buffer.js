function bufferEmptyException() {
    this.name = 'bufferEmptyException';
    this.message = 'Attempted to read from an empty buffer';
}
bufferEmptyException.prototype = new Error();

function bufferFullException() {
    this.name = 'bufferEmptyException';
    this.message = 'Attempted to write to a full buffer';
}
bufferFullException.prototype = new Error();

function CircularBuffer(size) {
    this._vals = [];
    this._max = size;
}

CircularBuffer.prototype.read = function() {
    if (!this._vals)
        throw new bufferEmptyException();
    return this._vals.pop();
};

CircularBuffer.prototype.write = function(val) {
    if (this._vals.length >= this._max)
        throw new bufferFullException();
    if (val)
        this._vals.unshift(val);
};

// would rather pass this as a parameter to .write(), but
CircularBuffer.prototype.forceWrite = function(val) {
    if (this._vals.length >= this._max)
        this._vals.pop();
    this.write(val);
};

CircularBuffer.prototype.clear = function() {
    this._vals = [];
};

module.exports = {
    circularBuffer: function(size) { return new CircularBuffer(size); },
    bufferFullException: bufferFullException,
    bufferEmptyException: bufferEmptyException
}
