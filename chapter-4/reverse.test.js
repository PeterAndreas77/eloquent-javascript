//Arrays have a reverse method that changes the array by inverting the order in which its
//elements appear. For this exercise, write two functions. The first, reverseArray, takes an
//array as argument and produces a new array that has the same elements in the inverse order.
function reverseArray(array) {
  if (!array || array.length === 0) return "Please input an array";

  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
// console.log(reverseArray([1, 2, 3]));
// console.log(reverseArray(["a", "b", "c"]));
test("Reverse an array by creating a new array", () => {
  const arr1 = [1, 2, 3];
  const arr2 = ["a", "b", "c"];
  const rev1 = [3, 2, 1];
  const rev2 = ["c", "b", "a"];
  expect(reverseArray(arr1)).toEqual(rev1);
  expect(reverseArray(arr2)).toEqual(rev2);
  expect(reverseArray()).toEqual("Please input an array");
});

//The second, reverseArrayInPlace, does what the reverse method does: it modifies the array
//given as argument by reversing its elements. Neither may use the standard reverse method.
function reverseArrayInPlace(array) {
  if (!array || array.length === 0) return "Please input an array";

  let mid = Math.floor(array.length / 2);
  let placeholder;
  for (i = 0; i < mid; i++) {
    placeholder = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = placeholder;
  }
  return array;
}
// console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
// console.log(reverseArrayInPlace(["a", "b", "c", "d", "e", "f"]));

test("Reverse an array in place", () => {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = ["a", "b", "c", "d", "e"];
  const rev1 = [5, 4, 3, 2, 1];
  const rev2 = ["e", "d", "c", "b", "a"];
  expect(reverseArray(arr1)).toEqual(rev1);
  expect(reverseArray(arr2)).toEqual(rev2);
  expect(reverseArray()).toEqual("Please input an array");
});
