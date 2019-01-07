// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const strA = stringA.replace(/\W/g, "").toLowerCase();
    const strB = stringB.replace(/\W/g, "").toLowerCase();

    return strA.split('').sort().join('') === strB.split('').sort().join('');
}


module.exports = anagrams;


// function anagrams(stringA, stringB) {
//     const strAMap = makeCharMap(stringA);
//     const strBMap = makeCharMap(stringB);
//
//     // edge case
//     if (Object.keys(strAMap).length !== Object.keys(strBMap).length) {
//         return false;
//     }
//
//     for (let prop in strAMap) {
//         if (strBMap[prop] !== strAMap[prop]) {
//             return false;
//         }
//     }
//
//     return true;
//
//     function makeCharMap(str) {
//         let charMap = {};
//         let string = str.replace(/\W/g, "").toLowerCase();
//
//         for (let char of string) {
//             if (!charMap[char]) {
//                 charMap[char] = 1;
//             }
//
//             charMap[char]++;
//         }
//
//         return charMap;
//     }
// }