/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // brute force approach - but it will take 0(n^2) time which is not 
    // optimized so we will think about optimized way
    // for(let i=0;i<nums.length-1;i++){
    //     for(let j=i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j]==target){
    //             return [i,j];
    //         }
    //     }
    // }

    // this will take 0(n) time and 0(n) space
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        let req = target - nums[i];
        if(map.has(req)){
            return [map.get(req),i];
        }else{
            map.set(nums[i],i);
        }
    }
};