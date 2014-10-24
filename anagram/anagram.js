function Anagram(word) {
    this.word = word.trim().toLowerCase();
}

Anagram.prototype.matches = function(wordList) {
    if (!(wordList instanceof Array))
        wordList = Array.apply(null, arguments);
    
    var result = [],
        thisWord = this.word.split('').sort().join('');

    for (var listIndex = 0; listIndex < wordList.length; listIndex++) {
        var testWord = wordList[listIndex].trim().toLowerCase();
        
        if (testWord.length > this.word.length || testWord === this.word)
            continue;

        var testWord = testWord.split('').sort('').join('');

        if (testWord === thisWord)
            result.push(wordList[listIndex]);
    }
    
    return result;
};

module.exports = function anagram(word) {
    return new Anagram(word);
};