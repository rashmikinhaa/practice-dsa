/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let map = new Map();
    for(let a of s){
        if(map.has(a)){
           map.set(a,map.get(a)+1);
        }else{
            map.set(a,1);
        }
    }

    let maxVowel = 0;
    let maxCons = 0;
    for (let [key, value] of map) {
        if (
            key === 'a' || key === 'e' ||
            key === 'i' || key === 'o' ||
            key === 'u'
        ) {
            maxVowel = Math.max(maxVowel, value);
        } else {
            maxCons = Math.max(maxCons, value);
        }
    }

    return maxVowel+maxCons;
};