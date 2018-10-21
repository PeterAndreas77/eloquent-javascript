//Analogous to the some method, arrays also have an every method. This one returns true when
//the given function returns true for every element in the array. In a way, some is a version
//of the || operator that acts on arrays, and every is like the && operator.
//Implement every as a function that takes an array and a predicate function as parameters.
//Write two versions, one using a loop and one using the some method.
function everyWithLoop(array, predicate) {
  for (let i = 0; i < array.length; i++) {
    if (!predicate(array[i])) return false;
  }
  return true;
}
console.log(everyWithLoop([1, 3, 5], n => n < 10));
console.log(everyWithLoop([2, 4, 16], n => n < 10));
console.log(everyWithLoop([], n => n < 10));
console.log(everyWithLoop([3, 9, 27], n => n < 0));

function everyWithSome(array, predicate) {
  return !array.some(n => !predicate(n));
}
console.log(everyWithSome([1, 3, 5], n => n < 10));
console.log(everyWithSome([2, 4, 16], n => n < 10));
console.log(everyWithSome([], n => n < 10));
console.log(everyWithSome([3, 9, 27], n => n < 0));
