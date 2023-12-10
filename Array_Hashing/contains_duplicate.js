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
