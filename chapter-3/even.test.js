// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even
//or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define
//whether a positive whole number is even or odd:
// * Zero is even.
// * One is odd.
// * For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The function should
//accept a single parameter (a positive, whole number) and return a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
function isEven(num) {
  //Input sanitization
  if (isNaN(num)) return "Not a number";
  //Input sanitization for negative numbers
  if (num < 0) {
    num = Math.ceil(num);
    num = -num;
  }

  num = Math.floor(num);
  if (num === 0) return true;
  else if (num === 1) return false;
  else return isEven(num - 2);
}
// console.log("Is 50 even?", isEven(50));
// console.log("Is 75 even?", isEven(75.5));
// console.log("Is -1 even?", isEven(-1));
// console.log("Is -10 even?", isEven(-10.1));
// console.log("Is 'hello' even?", isEven("hello"));

test("Tell if a number is even or not", () => {
  expect(isEven(3)).toBe(false);
  expect(isEven(-2)).toBe(true);
  expect(isEven(1.1)).toBe(false);
  expect(isEven(-4.5)).toBe(true);
  expect(isEven("world")).toEqual("Not a number");
});
