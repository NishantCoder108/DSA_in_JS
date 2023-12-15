/**
 * Basic Two Pointer Method---
 * -------------------------------
 * https://leetcode.com/problems/trapping-rain-water/submissions/
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let left = 0,
    right = height.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      waterTrapped += Math.max(0, leftMax - height[left]);
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      waterTrapped += Math.max(0, rightMax - height[right]);
      right--;
    }
  }

  return waterTrapped;
};

/**
 * Problem Statement---
 * 
 
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
 */
