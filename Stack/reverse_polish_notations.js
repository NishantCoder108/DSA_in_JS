//https://leetcode.com/problems/evaluate-reverse-polish-notation/description/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  const operators = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => Math.trunc(x / y),
  };

  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseFloat(token));
      console.log("AAA", parseInt(token));
    } else if (operators.hasOwnProperty(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const result = operators[token](operand1, operand2);
      stack.push(result);
      console.log({ result });
    } else {
      throw new Error(`Invalid token: ${token}`);
    }
  }
  console.log({ stack });
  if (stack.length === 1) {
    return stack[0];
  } else {
    throw new Error("Invalid expression");
  }
};

/**
 * 
 * ---Problem Statement-----
 
You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

Evaluate the expression. Return an integer that represents the value of the expression.

Note that:

The valid operators are '+', '-', '*', and '/'.
Each operand may be an integer or another expression.
The division between two integers always truncates toward zero.
There will not be any division by zero.
The input represents a valid arithmetic expression in a reverse polish notation.
The answer and all the intermediate calculations can be represented in a 32-bit integer.
 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
 

Constraints:

1 <= tokens.length <= 104
tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].

 * 
 * 
 * 
 * Infix Notation: The expression "5 + 3" is an example of infix notation. In infix notation, operators are written between their operands. This is the typical mathematical notation that you see in textbooks and use when communicating mathematical expressions.

Reverse Polish Notation (RPN): The expression "5 3 +" is an example of RPN or postfix notation. In RPN, operators come after their operands. RPN is often used in computing and calculators because it doesn't require parentheses or an understanding of operator precedence. It's also well-suited for stack-based processing.

When you mention "5 3 +," it's actually in RPN, not infix notation. If you convert "5 3 +" to infix notation, it would be "5 + 3," but the result would still be in infix notation, not RPN.

To clarify:

Infix Notation: "5 + 3"
RPN (Postfix) Notation: "5 3 +"

 */
/**
 *
 * -----Other Methods--------
 *
 *
 * https://leetcode.com/problems/evaluate-reverse-polish-notation
 * Time O(N) | Space(N)
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens, stack = []) {
  for (const char of tokens) {
    /* Time O(N) */
    const isOperation = char in OPERATORS;
    if (isOperation) {
      const value = performOperation(char, stack);

      stack.push(value); /* Space O(N) */

      continue;
    }

    stack.push(Number(char)); /* Space O(N) */
  }

  return stack.pop();
};

var OPERATORS = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => Math.trunc(a / b),
};

var performOperation = (char, stack) => {
  const [rightNum, leftNum] = [stack.pop(), stack.pop()];
  const operation = OPERATORS[char];

  return operation(leftNum, rightNum);
};
