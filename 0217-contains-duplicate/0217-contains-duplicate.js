/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {

    // 0(n^2) - brute force
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]==nums[j]){
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // 0(n(log(n)))
    // nums.sort();
    // for(let i=0;i<nums.length-1;i++){
    //     if(nums[i]==nums[i+1]){
    //         return true;
    //     }
    // }
    // return false;


    let set = new Set();
    for(let i=0;i<nums.length;i++){
        if(set.has(nums[i])){
          return true;
        }
        else{
            set.add(nums[i]);
        }
    }
    return false;
};