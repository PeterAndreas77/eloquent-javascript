// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest
//argument. We can build something like that now. Write a function min that takes two
//arguments and returns their minimum.
function minimum(a, b) {
  if (a < b) return a;
  else return b;
}
// console.log("Minimum between 0 and 10:", minimum(0, 10));
// console.log("Minimum between 0 and -10:", minimum(0, -10));

test("Return a minimum between two values", () => {
  expect(minimum(1, 2)).toBe(1);
});
