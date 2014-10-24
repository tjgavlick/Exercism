module.exports = {
    keep: function(set, fn) {
        var result = [];
        set.forEach(function(el) {
            if (fn(el)) result.push(el);
        });
        return result;
    },
    discard: function(set, fn) {
        var result = [];
        set.forEach(function(el) {
            if (!fn(el)) result.push(el);
        });
        return result;
    }
};