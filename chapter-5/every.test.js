//Analogous to the some method, arrays also have an every method. This one returns true when
//the given function returns true for every element in the array. In a way, some is a version
//of the || operator that acts on arrays, and every is like the && operator.
//Implement every as a function that takes an array and a predicate function as parameters.
//Write two versions, one using a loop and one using the some method.
function everyWithLoop(array, predicate) {
  if (!array) return "Please provide an array";
  if (!predicate) return "Please provide a function";
  if (typeof array != "object") return "Must be an array";
  if (typeof predicate != "function") return "Predicate must be function";

  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) return false;
  }
  return true;
}
// console.log(everyWithLoop([1, 3, 5], n => n < 10));
// console.log(everyWithLoop([2, 4, 16], n => n < 10));
// console.log(everyWithLoop([], n => n < 10));
// console.log(everyWithLoop([3, 9, 27], n => n < 0));

test("Returns true for every element in the array using loop", () => {
  const array = [10, 20, 30, 40, 50];
  const func1 = n => n < 0;
  const func2 = n => n > 1;
  expect(everyWithLoop([], func1)).toEqual(true);
  expect(everyWithLoop(array, func1)).toEqual(false);
  expect(everyWithLoop(array, func2)).toEqual(true);
  expect(everyWithLoop(1, func1)).toEqual("Must be an array");
  expect(everyWithLoop(array)).toEqual("Please provide a function");
  expect(everyWithLoop()).toEqual("Please provide an array");
  expect(everyWithLoop(array, 1)).toEqual("Predicate must be function");
});

function everyWithSome(array, predicate) {
  if (!array) return "Please provide an array";
  if (!predicate) return "Please provide a function";
  if (typeof array != "object") return "Must be an array";
  if (typeof predicate != "function") return "Predicate must be function";

  return !array.some(n => !predicate(n));
}
// console.log(everyWithSome([1, 3, 5], n => n < 10));
// console.log(everyWithSome([2, 4, 16], n => n < 10));
// console.log(everyWithSome([], n => n < 10));
// console.log(everyWithSome([3, 9, 27], n => n < 0));

test("Returns true for every element in the array using some method", () => {
  const array = [10, 20, 30, 40, 50];
  const func1 = n => n < 0;
  const func2 = n => n > 1;
  expect(everyWithSome([], func1)).toEqual(true);
  expect(everyWithSome(array, func1)).toEqual(false);
  expect(everyWithSome(array, func2)).toEqual(true);
  expect(everyWithSome(1, func1)).toEqual("Must be an array");
  expect(everyWithSome(array)).toEqual("Please provide a function");
  expect(everyWithSome()).toEqual("Please provide an array");
  expect(everyWithSome(array, 1)).toEqual("Predicate must be function");
});
