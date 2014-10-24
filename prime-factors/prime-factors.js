module.exports = primeFactors = {
    for: function(num) {
        var result = [];

        function findFactors(num) {
            for (var i = 2; i <= num; i++) {
                if (num % i === 0) {
                    result.push(i);
                    return findFactors(num/i);
                }
            }
        }
        
        findFactors(num);
        return result;
    }
};