//Use the reduce method in combination with the concat method to “flatten” an array of arrays
//into a single array that has all the elements of the original arrays.
function flatten(arrays) {
  //Input sanitization
  if (!arrays) return "Please provide an array";
  if (typeof arrays != "object") return "Parameter must be an array";

  return arrays.reduce((a, b) => a.concat(b));
}

// let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(flatten(arrays));

test("Flatten an arrays of array into a single array", () => {
  let arrays = [[1, 2, 3], [4, 5], [6]];
  let array = [1, 2, 3, 4, 5, 6];
  expect(flatten(arrays)).toEqual(array);
  expect(flatten()).toEqual("Please provide an array");
  expect(flatten(2)).toEqual("Parameter must be an array");
});
