var Bob = function() {
    if (!(this instanceof Bob)){
        return new Bob();
    }
}

Bob.prototype.hey = function(phrase) {
    // SHOUTING
    if (phrase === phrase.toUpperCase() && /[A-Z]/.test(phrase))
        return 'Woah, chill out!';
    // question?
    if (phrase[phrase.length - 1] === '?')
        return 'Sure.';
    // empty string or only whitespace
    if (!/\S/.test(phrase))
        return 'Fine. Be that way!';
    // everything else
    return 'Whatever.';
};

module.exports = Bob;