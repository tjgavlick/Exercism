'use strict';


function Garden(diagram, students) {
    diagram = diagram.split('\n').map(function (row) { return row.split(''); });
    students =
        (students || ['alice', 'bob', 'charlie', 'david',
                      'eve', 'fred', 'ginny', 'harriet',
                      'ileana', 'joseph', 'kincaid', 'larry'])
        .map(function (student) { return student.toLowerCase(); })
        .sort();
    var plants = { C: 'clover', G: 'grass', R: 'radishes', V: 'violets' },
        thisGarden = this;

    function getPlants(index) {
        return [
            diagram[0][index * 2], diagram[0][index * 2 + 1],
            diagram[1][index * 2], diagram[1][index * 2 + 1]
        ].map(function (letter) {
            return plants[letter] || null;
        });
    }

    students.forEach(function (child, index) {
        thisGarden[child] = getPlants(index);
    });
}


module.exports = Garden;