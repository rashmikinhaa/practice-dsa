/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Brute force - it exceeds time
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]==nums[j]){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // using map
    // let map = new Map();
    // for(let i=0;i<nums.length;i++){
    //     if(map.has(nums[i])){
    //         return true;
    //     }
    //     map.set(nums[i],i);
    // }
    // return false;

    // nums.sort();
    // for(let i=0;i<nums.length-1;i++){
    //     if(nums[i]==nums[i+1]){
    //         return true;
    //     }
    // }
    // return false;

    // set
    let set = new Set();
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
            return true;
        }
        set.add(nums[i]);
    }
    return false;
};