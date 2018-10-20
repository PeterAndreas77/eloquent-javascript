//The == operator compares objects by identity. But sometimes you’d prefer to compare the
//values of their actual properties.
//To find out whether values should be compared directly (use the === operator for that) or
//have their properties compared, you can use the typeof operator. If it produces "object"
//for both values, you should do a deep comparison. But you have to take one silly exception
//into account: because of a historical accident, typeof null also produces "object".
//The Object.keys function will be useful when you need to go over the properties of objects
//to compare them.

//Write a function deepEqual that takes two values and returns true only if they are the
//same value or are objects with the same properties, where the values of the properties
//are equal when compared with a recursive call to deepEqual.
function deepEqual(obj1, obj2) {
  let keys,
    keyCount = 0,
    values1 = [],
    values2 = [],
    valueCount = 0;

  if (
    typeof obj1 == "object" &&
    obj1 != null &&
    typeof obj2 == "object" &&
    obj2 != null
  ) {
    keys = Object.keys(obj1);
    for (let key of keys) {
      values1.push(obj1[key]);
    }
    for (let key of keys) {
      values2.push(obj2[key]);
    }
    for (let value1 of values1) {
      for (let value2 of values2) {
        if (value1 == value2) {
          valueCount++;
        }
      }
    }
    for (let key in keys) {
      if (obj1[key] == obj2[key]) {
        keyCount++;
      }
    }
    if (obj1.length == obj2.length && keyCount == valueCount) return true;
    else return false;
  } else return obj1 === obj2;
}
// let obj = { here: { is: "an" }, object: 2 };
// console.log(deepEqual(obj, obj));
// console.log(deepEqual(obj, { here: 1, object: 2 }));
// console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));

test("Deeply compare two objects", () => {
  const obj1 = { cheeseburger: { cheese: true, bacon: false }, number: 1 };
  const obj2 = { cheeseburger: { cheese: false, bacon: true }, number: 1 };
  expect(deepEqual(obj1, obj1)).toBe(true);
  expect(deepEqual(obj1, obj2)).toBe(false);
  expect(deepEqual(1, 1)).toBe(true);
  expect(deepEqual(1, -1)).toBe(false);
  expect(deepEqual("abc", "abc")).toBe(true);
  expect(deepEqual("abc", "xyz")).toBe(false);
});
