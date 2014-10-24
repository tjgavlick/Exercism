var Beer = {

    lines: {
        intro: "() bottles of beer on the wall, () bottles of beer.\n",
        outro: "Take one down and pass it around, () bottles of beer on the wall.\n",
        end: "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
    },

    verse: function(verseNum) {
        if (verseNum > 99 || verseNum < 0)
            return "Go home, you're drunk";

        function insertNum(str, num) {
            if (num > 1)
                return str.replace(/\(\)/g, num);
            if (num === 1)
                return str.replace(/\(\)/g, num).replace(/bottles/g, 'bottle');
            str = str.replace(/\(\)/g, 'no more').replace('one', 'it');
            return str[0].toUpperCase() + str.slice(1);
        }

        var result = insertNum(Beer.lines.intro, verseNum);
        if (verseNum > 0) {
            result += insertNum(Beer.lines.outro, verseNum - 1);
        } else {
            result += Beer.lines.end;
        }

        return result;
    },

    sing: function(verseStart, verseEnd) {
        if (verseStart <= verseEnd)
            return Beer.verse(verseStart);
        verseEnd = verseEnd || 0;

        var result = '';
        for (; verseStart >= verseEnd; verseStart--) {
            result += Beer.verse(verseStart) + '\n';
        }
        return result.slice(0,-1);  // remove unnecessary trailing '\n'
    }
};

module.exports = Beer;