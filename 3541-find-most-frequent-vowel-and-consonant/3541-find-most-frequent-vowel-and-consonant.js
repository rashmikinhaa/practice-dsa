/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
     let myMap= new Map();

    for(let num of s){
        if(!myMap[num]){
            myMap[num]=1;
        }
        else{
            myMap[num]++;
        }
    }

    let vowels= ['a', 'e', 'i', 'o','u'];
    let maxVowelFreq=0;
    let maxConsonantFreq=0;

    for(let num of s){

        if(vowels.includes(num) && myMap[num]>maxVowelFreq){
            maxVowelFreq= myMap[num];
        }
        if(!vowels.includes(num) && myMap[num]>maxConsonantFreq){
            maxConsonantFreq= myMap[num];
        }
    }
    return maxVowelFreq + maxConsonantFreq;
};