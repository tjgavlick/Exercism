module.exports = {
    encode: function(str) {
        var library = 'abcdefghijklmnopqrstuvwxyz'.split(''),
            yrarbil = Array.apply(null, library).reverse();

        return str
            .toLowerCase()
            .replace(/\W/g, '')
            .split('')
            .map(function(letter, place) {
                return yrarbil[library.indexOf(letter)] || letter;
            })
            .join('')
            .replace(/(.{5})/g, '$1 ')
            .trim();
    }
};