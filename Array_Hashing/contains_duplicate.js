// https://leetcode.com/problems/contains-duplicate/submissions/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const hash = {};

  for (let el of nums) {
    if (!hash[el]) {
      hash[el] = 1;
    } else {
      hash[el]++;
    }
  }

  let maxTemp = 1;

  for (let key in hash) {
    if (hash[key] > maxTemp) {
      return true;
    }
  }

  return false;
};

/**Problem Statement
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
 */
