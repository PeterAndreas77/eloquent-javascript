//Arrays have a reverse method that changes the array by inverting the order in which its
//elements appear. For this exercise, write two functions. The first, reverseArray, takes an
//array as argument and produces a new array that has the same elements in the inverse order.
function reverseArray(array) {
  let newArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(reverseArray(["a", "b", "c"]));

//The second, reverseArrayInPlace, does what the reverse method does: it modifies the array
//given as argument by reversing its elements. Neither may use the standard reverse method.
function reverseArrayInPlace(array) {
  let mid = Math.floor(array.length / 2);
  let placeholder;
  for (i = 0; i < mid; i++) {
    placeholder = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = placeholder;
  }
  return array;
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));
