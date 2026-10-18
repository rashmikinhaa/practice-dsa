/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // nums.sort((a,b)=>a-b);
    let map = new Map();
    for(let i=0; i< nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i])+1);
        }else{
            map.set(nums[i],1);
        }
    }

    let index = 0;

    for (let color = 0; color <= 2; color++) {
        let count = map.get(color) || 0;

        for (let j = 0; j < count; j++) {
            nums[index] = color;
            index++;
        }
    }
};