/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let map = new Map();
    for(let stone of stones){
        if(map.has(stone)){
           map.set(stone, map.get(stone) + 1);
        }else{
           map.set(stone,1);
        }
    }

    let countJewel = 0;
    for(let jewel of jewels){
        if(map.has(jewel)){
            countJewel += map.get(jewel);
        }
    }
    return countJewel;
};