function DNA(sequence) {
    this.sequence = sequence;
}

DNA.prototype.count = function(nucleotide) {
    if (!this.sequence)
        return 0;
    return this.sequence.split(nucleotide).length - 1;
};

DNA.prototype.histogram = function() {
    var result = {A: 0, T: 0, C: 0, G: 0};
    for (var nucleotide in result)
        result[nucleotide] = this.count(nucleotide);
    return result;
};

function dna(sequence) {
    if (sequence && /[^ATCG]/.test(sequence))
        throw new RangeError('A non-DNA sequence was provided');
    return new DNA(sequence);
}

module.exports = dna;