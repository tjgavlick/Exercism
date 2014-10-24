'use strict';

function Matrix(string) {
    var self = this;
    this.string = string;
    this.rows = string
        .split('\n')
        .map(function (row) {
            return row.split(' ').map(function (num) {
                return Number(num);
            });
        });
    this.columns = [];

    this.rows.forEach(function (row) {
        row.forEach(function (el, index) {
            if (!self.columns[index])
                self.columns[index] = [];
            self.columns[index].push(el);
        });
    });
}

module.exports = Matrix;