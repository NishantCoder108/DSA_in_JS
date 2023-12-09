let hashmap = {};

let obj = {
  tomotto: 2,
  potatto: 4,
  carrot: 2,
  Pen: 4,
};

// console.log({ hashmap });
// console.log({ obj });

const arr = [
  "tomotto",
  "potatto",
  "potatto",
  "potatto",
  "Carrot",
  "Pen",
  "Pen",
  "Pen",
  "Pen",
];

const hashCount = (arr) => {
  const hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      //   console.log(hash[arr[i]]);
      //   hash[arr[i]] = hash[arr[i]] + 1;

      hash[arr[i]]++;
    }
  }

  return hash;
};

console.log(hashCount(arr)); //{ tomotto: 1, potatto: 3, Carrot: 1, Pen: 4 }
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean({}));

/**
 * Problem , we have json,that is comming from backend , we want to sort by branch
 */
const json = [
  { name: "Ram", branch: "civil" },
  { name: "Elon", branch: "civil" },
  { name: "Usha", branch: "civil" },
  { name: "Mohan", branch: "Mechanical" },
  { name: "Sohan", branch: "CS" },
  { name: "Nishant", branch: "ECE" },
];

const sortByBranch = (arr) => {
  const hash = {};

  for (let objIdx = 0; objIdx < arr.length; objIdx++) {
    if (!hash[arr[objIdx].branch]) {
      //   console.log("AAA", [arr[objIdx].name]);

      hash[arr[objIdx].branch] = [arr[objIdx].name];
    } else {
      //   console.log("AAABBB", [...arr[objIdx].name]);
      //   console.log(hash[arr[objIdx].branch]);

      hash[arr[objIdx].branch].push(arr[objIdx].name);
    }
  }

  return hash;
};

console.log(sortByBranch(json));

/**
 * Problem 3: We have string , you just find , maximum repeated letter
 *
 * eg. alpha ---> a
 */

const str = "alpha";

const maxRepLetter = (str) => {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = 1;
    } else {
      hash[str[i]]++;
    }
  }

  console.log({ hash });

  //find maximum repetitive letter

  let maxCharVal = 0;
  let repChar = "";

  for (let key in hash) {
    if (hash[key] > maxCharVal) {
      maxCharVal = hash[key];
      repChar = key;
    }
  }

  return repChar;
};

console.log(maxRepLetter(str));
