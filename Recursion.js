var counter = 0;

function callMe(args) {
  counter++;

  if (counter > 3) {
    return "LOOPS " + args;
  }

  return callMe("Anything");
}

// let res = callMe();
// console.log(res);

function calMyself(n) {
  console.log("N", n);
  if (n <= 3) {
    return 3;
  }

  return n + calMyself(n - 1);
}

let res = calMyself(9);
console.log(res);
