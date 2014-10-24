function Sieve(limit) {
    var limit = limit || 2,
        set = [];

    // populate set
    for (var i = 2; i <= limit; i++)
        set.push(i);

    // sieve set
    for (var i = 0; i < set.length; i++) {
        var multiple = 0;
        for (var j = 2; multiple < set[set.length - 1]; j++) {
            multiple = set[i] * j;
            var index = set.indexOf(multiple);
            if (index > 0) {
                set.splice(index, 1);
            }
        }
    }

    this.primes = set;
}

module.exports = Sieve;