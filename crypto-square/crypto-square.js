function Crypto(plaintext) {
    this._plaintext = plaintext;
}


Crypto.prototype.normalizePlaintext = function() {
    return this._plaintext.toLowerCase().replace(/[^a-z0-9]/g, '');
};


Crypto.prototype.size = function() {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
};


Crypto.prototype.segment = function(string) {
    var regex = new RegExp('(.{' + this.size() + '})', 'g');
    return string.replace(regex, '$1 ').trim();
};


Crypto.prototype.plaintextSegments = function() {
    return this.segment(this.normalizePlaintext()).split(' ');
};


Crypto.prototype.normalizeCiphertext = function() {
    return this.segment(this.ciphertext());
};


Crypto.prototype.ciphertext = function() {
    var chunks = this.plaintextSegments(),
        result = '';

    for (var i = 0; i < chunks[0].length; i++) {
        chunks.forEach(function(chunk) {
            if (chunk[i])
                result += chunk[i];
        });
    }

    return result;
};


module.exports = Crypto;