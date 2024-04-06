//https://leetcode.com/problems/top-k-frequent-elements/submissions/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const hash = {};

    for (let i = 0; i < nums.length; i++) {
        if (!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            hash[nums[i]]++;
        }
    }

    const sortArr = Object.entries(hash)
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((a) => a[0]);

    return sortArr;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const hash = {};

    for (let el of nums) {
        if (!hash[el]) {
            hash[el] = 1;
        } else {
            hash[el]++;
        }
    }

    //find most frequent element

    const ObjEnt = Object.entries(hash); //its will have both ,key and value

    //now sort by value
    const sortedEnt = ObjEnt.sort((a, b) => b[1] - a[1]);

    //Find most k frequent element
    const kFrequentEle = sortedEnt.slice(0, k).map((pairs) => pairs[0]);

    return kFrequentEle;
};

/**
 * Problem Statement
 * 
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.
 */

//-------------------------Some Other Method--------------------------------------------
//First Method:

/**
 * Set - Frequency Counter | Using sort
 * Time O(NlogN) | Space O(N)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let frequency = {};
    for (let i = 0; i < nums.length; i++) {
        if (frequency.hasOwnProperty(nums[i])) frequency[nums[i]] += 1;
        else frequency[nums[i]] = 1;
    }
    let result = Object.keys(frequency).map((key) => [
        Number(key),
        frequency[key],
    ]);
    let sortedResult = result.sort((a, b) => {
        return b[1] - a[1];
    });
    let output = [];
    for (let i = 0; i < k; i++) {
        output.push(sortedResult[i][0]);
    }
    return output;
};

/**
 * Without Sort
 * Time O(N) | Space O(k)
 * https://leetcode.com/problems/top-k-frequent-elements/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function (nums, k) {
    const mp = new Map();
    const arr = new Array(nums.length + 1).fill(0);
    const ans = [];

    nums.forEach((el) => {
        const val = mp.get(el) || 0;
        mp.set(el, val + 1);
    });

    for (let [key, value] of mp) {
        const prev = arr[value] || [];
        prev.push(key);
        arr[value] = prev;
    }

    arr.reverse();
    for (let el of arr) {
        if (k < 1) break;
        if (el) {
            for (let el2 of el) {
                ans.push(el2);
                k--;
            }
        }
    }

    return ans;
};

//Other Method
function findTopKFrequent(nums, k) {
    const hash = {};

    // Count the frequency of each element
    for (let el of nums) {
        hash[el] = (hash[el] || 0) + 1;
    }

    // Convert the hash into an array of [element, frequency] pairs
    const frequencyArray = Object.entries(hash);

    console.log({ frequencyArray });
    // Sort the array based on frequency
    const frqSort = frequencyArray.sort((a, b) => b[1] - a[1]);

    console.log({ frqSort });
    // Extract the top k elements
    const topK = frequencyArray.slice(0, k).map((pair) => pair[0]);

    console.log({ topK });
    return topK;
}

// Example usage
console.log(findTopKFrequent([1, 1, 1, 2, 2, 3], 2)); // Example: Returns the two most frequent elements
