function toPower(int, exp = 1) {
  //Input sanitization
  if (isNaN(int)) return "Must be number";
  if (int % 1 != 0 || exp % 1 != 0) return "Cannot have decimal";

  if (exp === 0) return 1;
  else return int * toPower(int, exp - 1);
}
// console.log(toPower(2, 3));
// console.log(toPower(-1));
// console.log(toPower(-1.1));
// console.log(toPower(2, 3.5));
// console.log(toPower("Z"));

// test("Function toPower produce correct results", () => {
//   expect(toPower(0, 1)).toBe(0);
//   expect(toPower("X", "Y")).toEqual("Must be number");
//   expect(toPower(-2.5, -3.123)).toEqual("Cannot have decimal");
//   expect(toPower(3)).toBe(3);
// });

//One way to test for recursive is to wrap the function inside an object
const powerObj = {
  power: (int, exp) => {
    if (exp === 0) return 1;
    else return int * powerObj.power(int, exp - 1);
  }
};
//Then use jest.spyOn to mock the recursive function
// test("Recursive function to have been called properly", () => {
//   const mockFn = jest.spyOn(powerObj, "power");
//   const result = powerObj.power(2, 3);
//   expect(result).toBe(8);
//   expect(mockFn).toHaveBeenCalledTimes(4);
// });
