/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let currectCount = 0;
    let maxCount = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            currectCount=currectCount+1;
            if (currectCount > maxCount) {
                maxCount = currectCount;
            }
        }else{
            currectCount=0;
        }
    }
    return maxCount;
};