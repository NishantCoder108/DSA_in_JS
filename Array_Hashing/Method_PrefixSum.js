let arr = [0, 1, 6, 3, -1];
const prefixSumArr = [];

prefixSumArr[0] = arr[0];
for (let i = 1; i < arr.length; i++) {
  prefixSumArr[i] = prefixSumArr[i - 1] + arr[i];
}

console.log({ prefixSumArr }); // prefixSumArr: [ 0, 1, 7, 10, 9 ]

/**
 * prefix sum array is method where it added elements with previous element of prefixSumArr
 *
 * ie.  prefixSumArr[i] = prefixSumArr[i-1] + arr[i]     ,suppose i = 1;
 */
