//https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    //Use Prefix and postfix

    const result = Array(nums.length).fill(1);

    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] *= prefix;
        prefix *= nums[i];

        result[nums.length - 1 - i] *= postfix;
        postfix *= nums[nums.length - 1 - i];
    }

    return result;
};

/**
 * Array
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    const result = [];
    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }

    console.log({ prefix });
    console.log({ postfix });
    console.log({ result });

    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        result[i] *= postfix;
    }

    console.log({ prefix });
    console.log({ postfix });
    console.log({ result });
    return result;
}

console.log(productExceptSelf([1, 2, 3, 4]));
/**
 *
 *
 *
 *
 *




 *
 */

/**Problem Statement
 * 
 * 
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
 

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer




 */
/**
 * O(n^2) time
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf1 = function (nums) {
    const hash = {};

    function product(nums, exceptIdx) {
        let total = 1;

        for (let i = 0; i < nums.length; i++) {
            if (i === exceptIdx) {
                continue;
            } else {
                total *= nums[i];
            }
        }

        return total;
    }

    for (let i = 0; i < nums.length; i++) {
        if (!hash[i]) {
            hash[i] = product(nums, i);
        }
    }

    console.log({ hash });

    return Object.values(hash);
};

// Another method
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const answer = [];

    for (let i = 0; i < nums.length; i++) {
        let tempMultiply = 1;

        for (let j = 0; j < nums.length; j++) {
            if (i === j) continue;

            tempMultiply *= nums[j];
        }

        answer[i] = tempMultiply;
    }

    return answer;
};
