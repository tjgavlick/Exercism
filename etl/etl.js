function transform(old) {
    var result = Object.create(null);

    for (var score in old) {
        var letters = old[score];
        letters.forEach(function(letter) {
            result[letter.toLowerCase()] = Number(score);
        });
    }

    return result;
}

module.exports = transform;