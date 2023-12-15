/**
 * --Moving Both Pointer Method Technique--
 *
 * https://leetcode.com/problems/squares-of-a-sorted-array/submissions/
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const res = [];

  let left = 0;
  let right = nums.length - 1;
  let maxRightIdx = nums.length - 1;

  while (left <= right) {
    // equal sign giving because of left and right point to same element,adjustment of element of res,by maxRightIdx
    const squareleftEle = nums[left] * nums[left];
    const squareRightEle = nums[right] * nums[right];

    if (squareleftEle <= squareRightEle) {
      res[maxRightIdx] = squareRightEle;
      maxRightIdx--;

      right--;
    } else if (squareleftEle > squareRightEle) {
      res[maxRightIdx] = squareleftEle;
      maxRightIdx--;

      left++;
    }
  }

  return res;
};

/**
 * Problem Statement---
 * 
 
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.
 

Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?
 */
