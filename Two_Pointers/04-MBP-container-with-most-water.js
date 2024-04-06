/**
 * Moving Both Pointers Method Technique
 * -----------------------------------------
 * https://leetcode.com/problems/container-with-most-water/submissions/
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let leftIdx = 0;
    let rightIdx = height.length - 1;

    let maxArea = 0;

    while (leftIdx < rightIdx) {
        let width = rightIdx - leftIdx;
        let minHeight = Math.min(height[leftIdx], height[rightIdx]);
        let tempArea = width * minHeight;

        if (maxArea < tempArea) {
            maxArea = tempArea;
        }

        if (height[leftIdx] < height[rightIdx]) {
            leftIdx++;
        } else if (height[leftIdx] >= height[rightIdx]) {
            rightIdx--;
        }
    }

    return maxArea;
};

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;

    let maxArea = 0;
    while (left < right) {
        const width = right - left;

        let minHeight = Math.min(height[left], height[right]);

        let currArea = width * minHeight;
        maxArea = Math.max(currArea, maxArea);

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};

/**
 * Problem Statement
 * 
 
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
 

Constraints:

n == height.length
2 <= n <= 105
0 <= height[i] <= 104
 */
