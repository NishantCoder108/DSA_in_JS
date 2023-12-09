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
      console.log(hash[arr[i]]);
      //   hash[arr[i]] = hash[arr[i]] + 1;
      hash[arr[i]]++;
    }
  }

  return hash;
};

console.log(hashCount(arr)); //{ tomotto: 1, potatto: 3, Carrot: 1, Pen: 4 }
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean({}));
