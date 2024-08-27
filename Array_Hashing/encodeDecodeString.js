var encode = (strs, nonASCIICode = String.fromCharCode(257)) => {
    return strs.join(
        nonASCIICode
    ); /* Time O(N) | Ignore Auxillary Space O(N) */
};

/**
 * Non-ASCII Delimiter - Ignore Auxiliary Space
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/encode-and-decode-strings/
 * @param {string[]} strs
 * @return {string}
 */
var decode = (strs, nonASCIICode = String.fromCharCode(257)) => {
    return strs.split(
        nonASCIICode
    ); /* Time O(N) | Ignore Auxillary Space O(N) */
};

const strs = [
    "leet",
    "code",
    "is",
    "good",
    "platform",
    "for",
    "practicing :Nishant !",
    ",right",
];

const encodeStr = encode(strs);
console.log("Encoded", encodeStr);

const decodeStr = decode(encodeStr);
console.log("Decoded", decodeStr);
