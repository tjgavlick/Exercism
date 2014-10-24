'use strict';

module.exports = {
    translate: function (string) {
        var result    = '',
            vowels    = ['a', 'e', 'i', 'o', 'u'],  // stop pig-latin-ing on these
            groupings = ['qu'];  // special cases where consonants should stick with vowels

        string.split(' ').forEach(function (word) {
            while (vowels.indexOf(word[0]) === -1) {
                if (groupings.indexOf(word.slice(0, 2)) >= 0) {
                    word = word.slice(2) + word[0] + word[1];
                } else {
                    word = word.slice(1) + word[0];
                }
            }
            result += word + 'ay ';
        });

        return result.trim();
    }
};