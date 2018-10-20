//Objects, as generic blobs of values, can be used to build all sorts of data structures.
//A common data structure is the list (not to be confused with array). A list is a nested
//set of objects, with the first object holding a reference to the second, the second to the
//third, and so on.
// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };
//A nice thing about lists is that they can share parts of their structure. For example, if
//I create two new values {value: 0, rest: list} and {value: -1, rest: list}
//(with list referring to the binding defined earlier), they are both independent lists,
//but they share the structure that makes up their last three elements. The original list
//is also still a valid three-element list.

//Write a function arrayToList that builds up a list structure like the one shown when given
//[1, 2, 3] as argument.
function arrayToList(array) {
  if (!array || array.length === 0) return "Please input an [array]";

  let list = {};
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}
// const array = [1, 2, 3];
// const list = arrayToList(array);
// console.log(list);
test("Turning an array into a list properly", () => {
  const arr1 = [1, 2, 3];
  const arr2 = ["x", "y", "z"];
  const list1 = arrayToList(arr1);
  const list2 = arrayToList(arr2);
  expect(arrayToList(null)).toEqual("Please input an [array]");
  expect(arrayToList(arr1)).toEqual(list1);
  expect(arrayToList(arr2)).toEqual(list2);
});

// Also write a listToArray function that produces an array from a list.
function listToArray(list) {
  if (!list) return "Please input a list";

  let array = [];
  for (let node = list; node; node = node.rest) {
    if (node.value) array.push(node.value);
  }
  return array;
}
// console.log(listToArray(list));
test("Turn a list into an array", () => {
  const arr1 = [1, 2, 3];
  const arr2 = ["x", "y", "z"];
  const list1 = arrayToList(arr1);
  const list2 = arrayToList(arr2);
  expect(listToArray(null)).toEqual("Please input a list");
  expect(listToArray(list1)).toEqual(arr1);
  expect(listToArray(list2)).toEqual(arr2);
});

//Then add a helper function prepend, which takes an element and a list and creates a new
//list that adds the element to the front of the input list.
function prepend(list, element) {
  if (!list) return "Please input a list";
  if (!element) return "Missing an element to prepend";

  let newList = { value: element, rest: list };
  return newList;
}
// console.log(prepend(list, 4));
test("Prepend an element at the beginning of a list", () => {
  const arr = [1, 2, 3];
  const list = arrayToList(arr);
  const newList = prepend(list, 0);
  expect(prepend(list, 0)).toEqual(newList);
  expect(prepend(list)).toEqual("Missing an element to prepend");
  expect(prepend()).toEqual("Please input a list");
});

//Also write another helper function nth, which takes a list and a number and returns the
//element at the given position in the list (with zero referring to the first element) or
//undefined when there is no such element.
function nth(list, index) {
  if (!list) return "Please input a list";
  if (!index) return "Missing an index to return";

  let node = list;
  for (let i = 0; i <= index - 1; i++) {
    node = node.rest;
  }
  return node.value;
}
// console.log(nth(list, 0));
test("Return an element at index of a list", () => {
  const arr = [1, 2, 3];
  const list = arrayToList(arr);
  const index = nth(list, 0);
  expect(nth(list, 0)).toEqual(index);
  expect(nth(list)).toEqual("Missing an index to return");
  expect(nth()).toEqual("Please input a list");
});
