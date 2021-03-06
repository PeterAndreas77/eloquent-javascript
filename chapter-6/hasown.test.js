//An object’s hasOwnProperty can be used as a more robust alternative to the in operator
//when you want to ignore the prototype’s properties. But what if your map needs to include
//the word "hasOwnProperty"? You won’t be able to call that method anymore because the
//object’s own property hides the method value.
//Can you think of a way to call hasOwnProperty on an object that has its own property by
//that name?
let map = { one: true, two: true, hasOwnProperty: true };
// Fix this call
// console.log(map.hasOwnProperty("one"));
console.log(Object.prototype.hasOwnProperty.call(map, "two"));

test("hasOwnProperty is called", () => {
  const obj = Object.prototype.hasOwnProperty;
  expect(obj.call(map, "one")).toBe(true);
  expect(obj.call(map, "hasOwnProperty")).toBe(true);
  expect(obj.call(map, "three")).toBe(false);
});
