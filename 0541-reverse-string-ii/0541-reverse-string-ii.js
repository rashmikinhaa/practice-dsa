/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// function reverseString(a) {
//     let n = a.length - 1;
//     let reverseS = '';
//     while (n >= 0) {
//         reverseS += a[n];
//         n--;
//     }
//     return reverseS;
// }

// var reverseStr = function(s, k) {
//      let newString = '';
//     for (let i = 0; i < s.length; i += 2 * k) {
//         let firstPart = s.slice(i, i + k);
//         let secondPart = s.slice(i + k, i + 2 * k);

//         newString += reverseString(firstPart);
//         newString += secondPart;
//     }

//     return newString;
// };

var reverseStr = function(s, k) {
    let arr = s.split('');

    for (let i = 0; i < arr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, arr.length - 1);

        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];

            left++;
            right--;
        }
    }

    return arr.join('');
};