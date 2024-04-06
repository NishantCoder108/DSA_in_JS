//https://leetcode.com/problems/group-anagrams/submissions/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const hash = {};

    for (let el of strs) {
        const sortEl = el.split("").sort().join("");

        if (!hash[sortEl]) {
            hash[sortEl] = [el];
        } else {
            hash[sortEl].push(el);
        }
    }

    console.log({ hash });

    return [...Object.values(hash)];
};

/**
 * Problem Statement
 * 
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */

el = "rem";
const sortEl = el.split("");
const sortElS = sortEl.sort();
const j = sortElS.join("");

console.log({ sortEl });
console.log({ sortElS });
console.log({ j });

const hash = { a: 1, b: 4 };

let objHahs = [Object.values(hash)];
console.log({ objHahs });

console.log(""?.split("").sort().join(""));
