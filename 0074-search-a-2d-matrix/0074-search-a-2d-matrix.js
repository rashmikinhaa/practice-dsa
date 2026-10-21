/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;

    let left = 0;
    let right = (m*n)-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);

        let midRow = Math.floor(mid/n);
        let midCol = mid%n;

        if(matrix[midRow][midCol]==target){
            return true;
        }

        if(matrix[midRow][midCol]>target){
            right=mid-1
        }else{
            left=mid+1;
        }
    }

    return false;
};