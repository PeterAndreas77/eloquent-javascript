//Looping a Triangle
//Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
function loopATriangle(int) {
  //Input sanitization
  if (!int) return "Please provide a number";
  if (isNaN(int)) return "Must be a number";
  if (int % 1 != 0) return "Number cannot have decimal";
  if (int <= 0) return "Number cannot be zero and must be positive";

  let rows = "";
  let triangle = "";
  for (let i = 1; i <= int; i++) {
    rows += "#";
    triangle += rows + "\n";
  }
  return triangle;
}
// console.log(loopATriangle(7));
// console.log(loopATriangle());
// console.log(loopATriangle(7.77));
// console.log(loopATriangle(-1));
// console.log(loopATriangle("asd"));

test("It will print a triangle", () => {
  const result = "#\n##\n###\n####\n";
  expect(loopATriangle(4)).toBe(result);
  expect(loopATriangle(7.77)).toEqual("Number cannot have decimal");
  expect(loopATriangle(-1)).toEqual(
    "Number cannot be zero and must be positive"
  );
  expect(loopATriangle("asd")).toEqual("Must be a number");
  expect(loopATriangle()).toEqual("Please provide a number");
});
