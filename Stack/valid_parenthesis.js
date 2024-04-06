// https://leetcode.com/problems/valid-parentheses/submissions/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const brackets = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === brackets[s[i]]) {
            stack.pop();
        } else {
            stack.push(s[i]);
        }
    }

    return stack.length === 0;
};

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];

    const correctOrder = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    for (let i = 0; i < s.length; i++) {
        if (
            stack.length > 0 &&
            stack[stack.length - 1] === correctOrder[s[i]]
        ) {
            stack.pop();
            continue;
        }

        stack.push(s[i]);
    }

    return stack.length === 0;
};

/**
 * Problem Statement
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
 */

//------Some other Method-------

/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
    for (const bracket of s.split("")) {
        /* Time O(N) */
        const isParenthesis = bracket === "(";
        if (isParenthesis) stack.push(")"); /* Space O(N) */

        const isCurlyBrace = bracket === "{";
        if (isCurlyBrace) stack.push("}"); /* Space O(N) */

        const isSquareBracket = bracket === "[";
        if (isSquareBracket) stack.push("]"); /* Space O(N) */

        const isOpenPair = isParenthesis || isCurlyBrace || isSquareBracket;
        if (isOpenPair) continue;

        const isEmpty = !stack.length;
        const isWrongPair = stack.pop() !== bracket;
        const isInvalid = isEmpty || isWrongPair;
        if (isInvalid) return false;
    }

    return stack.length === 0;
};

/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */
var isValid = (s, stack = []) => {
    const map = {
        "}": "{",
        "]": "[",
        ")": "(",
    };

    for (const char of s) {
        /* Time O(N) */
        const isBracket = char in map;
        if (!isBracket) {
            stack.push(char);
            continue;
        } /* Space O(N) */

        const isEqual = stack[stack.length - 1] === map[char];
        if (isEqual) {
            stack.pop();
            continue;
        }

        return false;
    }

    return stack.length === 0;
};
