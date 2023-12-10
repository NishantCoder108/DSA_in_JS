// https://leetcode.com/problems/valid-anagram/submissions/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const hashS = {};
  const hashT = {};

  for (let i = 0; i < Math.max(s.length, t.length); i++) {
    //For s
    if (!hashS[s[i]]) {
      hashS[s[i]] = 1;
    } else {
      hashS[s[i]]++;
    }

    //For t
    if (!hashT[t[i]]) {
      hashT[t[i]] = 1;
    } else {
      hashT[t[i]]++;
    }
  }

  //Check both have letters are same

  if (Object.keys(hashS).length !== Object.keys(hashT).length) return false;

  for (let key in hashS) {
    if (hashS[key] !== hashT[key]) {
      return false;
    }
  }

  return true;
};

/**
 * Problem Statement
 * 
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */
