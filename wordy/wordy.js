'use strict';

function ArgumentError() {
    this.name = 'ArgumentError';
    this.message = '';
}
ArgumentError.prototype = Error.prototype;


function WordProblem(question) {
    if (question.slice(0, 8) === 'What is ') {
        this.series = question.slice(8, -1).split(' ').filter(function (el) { return el != 'by'; });
    } else {
        throw new ArgumentError();
    }

    this.operations = {
        'plus': function (a, b) {
            return a + b;
        },
        'minus': function (a, b) {
            return a - b;
        },
        'multiplied': function (a, b) {
            return a * b;
        },
        'divided': function (a, b) {
            return a / b;
        }
    };
}


WordProblem.prototype.answer = function () {
    var currentOp,
        operations = this.operations;

    return this.series.reduce(function (result, cur) {
        if (!Number(cur)) {
            if (!operations[cur]) {
                throw new ArgumentError();
            }
            currentOp = cur;
            return result;
        }
        cur = Number(cur);
        return currentOp ? operations[currentOp](result, cur) : result + cur;
    }, 0);
};


module.exports = {
    WordProblem: WordProblem,
    ArgumentError: ArgumentError
};