function toRna(sequence) {
    if (!sequence.trim() || /[^GCTA]+/.test(sequence))
        throw new RangeError('Given sequence was not a DNA sequence');

    var complements = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U'
    };

    return sequence.trim().split('').map(function(nucleotide) {
        return complements[nucleotide];
    }).join('');
}

module.exports = toRna;