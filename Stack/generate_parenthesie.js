//https://leetcode.com/problems/generate-parentheses/submissions/

/**
 * Time Complexity O(4^n / √n) | Space O(4^n / √n)
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];

  // Helper function to generate combinations recursively
  function generate(combo, open, close) {
    if (combo.length === 2 * n) {
      result.push(combo);
      return;
    }

    if (open < n) {
      generate(combo + "(", open + 1, close);
    }

    if (close < open) {
      generate(combo + ")", open, close + 1);
    }
  }

  generate("", 0, 0);
  return result;
};
/**
 * Problem Statement
 *Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8





 */
/**
 *Concepts
For a given positive integer `n`, the number of valid combinations of well-formed parentheses is given by the nth Catalan number. The formula for the nth Catalan number, denoted as Cn, is:


  Formula for the nth Catalan number:
  C_n = (2n)! / ((n + 1)! * n!)

 */
