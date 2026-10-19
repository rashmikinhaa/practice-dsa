/**
 * @param {number[]} nums
 * @return {number[]}
 */

function mergeSort(arr1,arr2){
   let newArr = [];
   let i=0;
   let j=0;
   while (i < arr1.length && j < arr2.length){
        if(arr1[i]>arr2[j]){
            newArr.push(arr2[j]);
            j++;
        }else{
            newArr.push(arr1[i]);
            i++; 
        }
    }
    return [...newArr,...arr1.slice(i),...arr2.slice(j)];
}
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;
    let mid = (nums.length)/2;
    let left = sortArray(nums.slice(0, mid));
    let right = sortArray(nums.slice(mid));
    return mergeSort(left,right);
};