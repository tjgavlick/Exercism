var compute = function(a, b) {
    var count = 0;
    for (var i = 0; i < Math.min(a.length, b.length); i++) {
        if (a[i] !== b[i]) {
            count++;
        }
    }
    return count;
}

module.exports.compute = compute;