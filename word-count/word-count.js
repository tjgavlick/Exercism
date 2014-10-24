var words = function(phrase) {
    var result = Object.create(null);
    phrase.split(/[\s]+/).forEach(function(word) {
        // instead of using a unicode library, let's just exclude the bad characters instead
        word = word.toLowerCase().replace(/[\!\?\.,;:@#\$%\^&\*\(\)¡¿]/g, '');
        if (!word)
            return;
        result[word] = result[word] ? result[word] + 1 : 1;
    });
    return result;
};

module.exports = words;