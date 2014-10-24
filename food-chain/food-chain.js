function Song() {

    this.animals = ['fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow', 'horse'];

    this.lines = {
        opening: "I know an old lady who swallowed a ",
        introductions: {
            fly:    "",
            spider: "It wriggled and jiggled and tickled inside her.\n",
            bird:   "How absurd to swallow a bird!\n",
            cat:    "Imagine that, to swallow a cat!\n",
            dog:    "What a hog, to swallow a dog!\n",
            goat:   "Just opened her throat and swallowed a goat!\n",
            cow:    "I don't know how she swallowed a cow!\n",
            horse:  "She's dead, of course!\n"
        },
        segueA: "She swallowed the ",
        segueB: " to catch the ",
        spiderElaboration: " that wriggled and jiggled and tickled inside her",
        ending: "I don't know why she swallowed the fly. Perhaps she'll die.\n"
    };

    // assemble a particular verse
    this.verse = function(verseNumber) {
        var thisAnimal = this.animals[verseNumber - 1],
            // add verse intro
            result = this.lines.opening + thisAnimal + '.\n' + this.lines.introductions[thisAnimal],
            pred, prey;

        if (thisAnimal === 'horse')
            return result;  // ouch

        // add the food chain lines, if applicable
        for (var i = verseNumber; i > 1; i--) {
            pred = this.animals[i - 1];
            prey = this.animals[i - 2];
            if (prey === 'spider')
                prey += this.lines.spiderElaboration;
            result += this.lines.segueA + pred + this.lines.segueB + prey + '.\n';
        }
        
        // append ending
        result += this.lines.ending;
        return result;
    };

    // assemble a collection of verses
    this.verses = function(rangeStart, rangeEnd) {
        if (rangeStart >= rangeEnd)
            return this.verse(rangeStart);

        var result = '';
        for (; rangeStart <= rangeEnd; rangeStart++) {
            result += this.verse(rangeStart) + '\n';
        }
        return result;
    };
}

var song = new Song();

module.exports = song;