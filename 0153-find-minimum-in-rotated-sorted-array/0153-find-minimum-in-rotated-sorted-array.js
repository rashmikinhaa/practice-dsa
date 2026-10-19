/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // time complexity - O(n)
    // let min=nums[0];
    // for(let i=0; i<nums.length; i++){
    //     if(min>nums[i]){
    //         min=nums[i];
    //     }
    // }
    // return min;

    // time complexity - O(nlogn)
    // nums.sort((a,b)=>a-b);
    // return nums[0];

    let left=0;
    let right = nums.length - 1;
    
    while (left < right) {  
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
};