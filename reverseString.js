/** Given a string , where you can reverse the letter , if not letter , where its position , they will live there, only character will be be reverse
 * 
 * e.g.  "ab-cd"  --> "dc-ba"
 *       "a-bC-dEf=ghLj!!"    --> "j-Lh-gfE=dCba!!"








*/

const reverseStr = (str) => {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let temp = str.split("");

  let leftIdx = 0;
  let rightIdx = str.length - 1;

  while (leftIdx <= rightIdx) {
    // if (alphabet.includes(temp[leftIdx]) && alphabet.includes(temp[rightIdx])) {
    if (
      /^[A-Za-z]+$/.test(temp[leftIdx]) &&
      /^[A-Za-z]+$/.test(temp[rightIdx])
    ) {
      //Swapping

      //   const tempValL = temp[leftIdx];
      //   const tempValR = temp[rightIdx];
      //   temp[rightIdx] = tempValL;
      //   temp[leftIdx] = tempValR;

      [temp[leftIdx], temp[rightIdx]] = [temp[rightIdx], temp[leftIdx]];
      leftIdx++;
      rightIdx--;
    } else if (!/^[A-Za-z]+$/.test(temp[leftIdx])) {
      leftIdx++;
    } else {
      rightIdx--;
    }
  }

  return temp.join("");
};

console.log(reverseStr("a-bC-dEf=ghLj!!"));
console.log(reverseStr("=56e!u"));
console.log(reverseStr("j!!"));
console.log(reverseStr("="));

// console.log(/[A-Za-z]$/.test("AAABBBCCC1111"));
// console.log(/^[A-Za-z]$/.test("AAABBBCCCaaabcdefghZ"));
// console.log(/^[A-Za-z]$/.test("d"));
// console.log(/^[A-Za-z]$/.test("11AAABBBCCCaaabcdefghZ"));
// console.log(/^[A-Za-z]$/.test("AAABBBCC4C7aaabcdefghZ"));
// console.log(/^[A-Za-z]+$/.test("AAABBBCC4C7a!aa%bcdefghZ"));
