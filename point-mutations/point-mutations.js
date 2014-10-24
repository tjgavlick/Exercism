function DNA(sequence) {
    this.sequence = sequence;
}

DNA.prototype.hammingDistance = function(refSequence) {
    if (!refSequence || !this.sequence)
        return 0;

    var result = 0,
        stopAt = Math.min(this.sequence.length, refSequence.length);

    for (var i = 0; i < stopAt; i++) {
        if (this.sequence[i] !== refSequence[i])
            ++result;
    }

    return result;
};

module.exports = DNA;