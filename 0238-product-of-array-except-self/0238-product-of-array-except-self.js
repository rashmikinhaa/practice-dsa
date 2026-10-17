var productExceptSelf = function(nums) {
    let answer = [];
    let left = 1;

    // Pass 1: Calculate left products
    for (let i = 0; i < nums.length; i++) {
        answer[i] = left;
        left = left * nums[i];
    }

    // Pass 2: Multiply by right products
    let right = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] = answer[i] * right;
        right = right * nums[i];
    }

    return answer;
};