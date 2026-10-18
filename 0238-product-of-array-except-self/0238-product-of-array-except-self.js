/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let arr=[];
    let left=1;
    for(let i=0;i<nums.length;i++){
        arr[i]=left;
        left=left*nums[i];
    }

    let right=1;
    for(let i=nums.length-1;i>=0;i--){
        arr[i]=arr[i]*right;
        right=right*nums[i];
    }

    return arr;

};