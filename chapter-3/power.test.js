//Base function
function toPower(int, exp) {
  if (exp === 0) return 1;
  else return int * toPower(int, exp - 1);
}
console.log(toPower(1, 3));

//One way to test for recursive is to wrap the function inside an object
const powerObj = {
  power: (int, exp) => {
    if (exp === 0) return 1;
    else return int * powerObj.power(int, exp - 1);
  }
};

//Then use jest.spyOn the object and method to see if its been called
test("Recursive function to have been called properly", () => {
  const mockFn = jest.spyOn(powerObj, "power");
  const result = powerObj.power(2, 3);
  expect(result).toBe(8);
  expect(mockFn).toHaveBeenCalledTimes(4);
});
