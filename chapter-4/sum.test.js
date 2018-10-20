//Write a range function that takes two arguments, start and end, and returns an array
//containing all the numbers from start up to (and including) end.
function range(start, end) {
  //Input sanitization
  if (!start && !end) return "Please provide both start and end points";
  if (!end) return "Please provide an endpoint";
  if (isNaN(start) || isNaN(end))
    return "Both start and end points must be numbers";

  let arr = [];
  while (start <= end) {
    arr.push(start);
    start++;
  }
  return arr;
}
// console.log(range(1, 10));
// console.log(range(1));
// console.log(range("x", "y"));
test("Return a range of numbers between two points", () => {
  const rng = [1, 2, 3, 4, 5];
  expect(range(1, 5)).toEqual(rng);
  expect(range(1)).toEqual("Please provide an endpoint");
  expect(range()).toEqual("Please provide both start and end points");
  expect(range("a", "b")).toEqual("Both start and end points must be numbers");
});

//Next, write a sum function that takes an array of numbers and returns the sum of these
//numbers. Run the example program and see whether it does indeed return 55.
function sum(array) {
  //Input sanitization
  if (!array || array.length === 0) return "Please input an array";
  for (let arr of array) {
    if (isNaN(arr)) return "Arrays must be of numbers";
  }

  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}
// console.log(sum(range(1, 10)));
// console.log(sum(range()));
test("Sum every element inside an array", () => {
  const rng = range(1, 10);
  expect(sum(rng)).toBe(55);
  expect(sum()).toEqual("Please input an array");
  expect(sum(["a", "b", "c"])).toEqual("Arrays must be of numbers");
});

//As a bonus assignment, modify your range function to take an optional third argument that
//indicates the “step” value used when building the array. If no step is given, the elements
//go up by increments of one, corresponding to the old behavior. The function call
//range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step
//values so that range(5, 2, -1) produces [5, 4, 3, 2].
function rangeModified(start, end, step = 1) {
  let arr = [];
  if (start < end) {
    while (start <= end) {
      arr.push(start);
      start += step;
    }
    return arr;
  } else {
    if (step === 1) {
      while (end <= start) {
        arr.push(start);
        start -= step;
      }
      return arr;
    } else {
      while (end <= start) {
        arr.push(start);
        start += step;
      }
      return arr;
    }
  }
}
// console.log(rangeModified(1, 5, 2));
// console.log(rangeModified(5, 10));
// console.log(rangeModified(10, 5, -2));
// console.log(rangeModified(5, 2));
test("Each element in the array is increased by the step parameter", () => {
  expect(rangeModified(1, 5)).toEqual([1, 2, 3, 4, 5]);
  expect(rangeModified(5, 1)).toEqual([5, 4, 3, 2, 1]);
  expect(rangeModified(1, 3, 2)).toEqual([1, 3]);
  expect(rangeModified(-3, -1, 2)).toEqual([-3, -1]);
});
