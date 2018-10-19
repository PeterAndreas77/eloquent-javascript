//Write a range function that takes two arguments, start and end, and returns an array
//containing all the numbers from start up to (and including) end.
function range(start, end) {
  let arr = [];
  while (start <= end) {
    arr.push(start);
    start++;
  }
  return arr;
}
console.log(range(1, 10));

//Next, write a sum function that takes an array of numbers and returns the sum of these
//numbers. Run the example program and see whether it does indeed return 55.
function sum(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}
console.log(sum(range(1, 10)));

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
console.log(rangeModified(5, 2));
