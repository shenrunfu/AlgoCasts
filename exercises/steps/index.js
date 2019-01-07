// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    printStairs(n, 0, '');

    function printStairs(n, row, stairString) {
        if (n === row) {
            return;
        }

        if (stairString.length === n) {
            console.log(stairString);
            return printStairs(n, row + 1, '')
        }

        const add = (stairString.length <= row) ? '#' : ' ';

        printStairs(n, row, stairString + add);
    }
}

module.exports = steps;
