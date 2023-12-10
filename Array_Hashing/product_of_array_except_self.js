//https://leetcode.com/problems/product-of-array-except-self/

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
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }

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
