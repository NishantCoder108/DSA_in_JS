/**
 * Basic Two Pointer Method Technique
 * --------------------------------------
 *  https://leetcode.com/problems/valid-palindrome/submissions/
 *  */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
    while (left < right) {
        console.log("sleft", s[left]);

        while (left < right && !alphabet.includes(s[left].toLowerCase())) {
            left++;
        }

        while (left < right && !alphabet.includes(s[right].toLowerCase())) {
            right--;
        }

        if (s[left]?.toLowerCase() === s[right]?.toLowerCase()) {
            left++;
            right--;
        } else if (s[left]?.toLowerCase() !== s[right]?.toLowerCase()) {
            return false;
        }
    }

    return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let res = false;
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // Skip non-alphanumeric characters from the left
        while (left < right && !/^[A-Za-z0-9]+$/.test(s[left])) {
            left++;
        }

        // Skip non-alphanumeric characters from the right
        while (left < right && !/^[A-Za-z0-9]+$/.test(s[right])) {
            right--;
        }

        // Compare the lowercase characters at left and right
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false; // Not a palindrome
        }

        left++;
        right--;
    }

    return true;
};
// console.log(isPalindrome("A man, a plan, a canal: Panama")); //true
// console.log(isPalindrome("race a car")); //false
// console.log(isPalindrome(" ")); //true

console.log(/^[A-Za-z0-9]+$/.test(""));

/**
 * Problem Statement---
 * 
 * 
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 

Constraints:

1 <= s.length <= 2 * 105
s consists only of printable ASCII characters.
 */
