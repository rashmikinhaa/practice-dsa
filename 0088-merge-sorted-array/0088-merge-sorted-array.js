/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let x = m+n-1;
    let a = m-1;
    let b = n-1;
    for(let i =x;i>=0;i--){
        if(b < 0 || (nums1[a]>=nums2[b] && a >= 0)){
            nums1[i]=nums1[a];
            a=a-1;
        }else{
            nums1[i]=nums2[b];
            b=b-1;
        }
    }
};