function accumulate(set, fn) {
    var result = [];
    set.forEach(function(el) {
        result.push(fn(el));
    });
    return result;
}

module.exports = accumulate;