// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest
//argument. We can build something like that now. Write a function min that takes two
//arguments and returns their minimum.
function minimum(a, b) {
  //Input sanitization
  if (!a || !b) return "Please input both numbers";
  if (isNaN(a) || isNaN(b)) return "Both a and b must be numbers";

  if (a < b) return a;
  else return b;
}
// console.log("Minimum between 0 and 10:", minimum(0, 10));
// console.log("Minimum between 0 and -10:", minimum(0, -10));
// console.log("Minimum between 0 and -10:", minimum(0.1, -10.11));
// console.log("Minimum between A and B:", minimum("A", "B"));

test("Return a minimum between two values", () => {
  expect(minimum(1, 2)).toBe(1);
  expect(minimum(-1, 1)).toBe(-1);
  expect(minimum(1)).toEqual("Please input both numbers");
  expect(minimum("A", "B")).toEqual("Both a and b must be numbers");
});
