/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonzero = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            let temp = nums[nonzero]
            nums[nonzero]=nums[i]
            nums[i]= temp;
            nonzero+=1;
        }
    }
};