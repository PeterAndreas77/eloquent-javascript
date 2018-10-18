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
  let tags = "";
  for (let i = 1; i <= int; i++) {
    tags += "#";
    console.log(tags);
  }
  return tags.length;
}
// console.log("\nTRIANGLE:");
// loopATriangle(7);

test("It will print a triangle", () => {
  const seven = 7;
  expect(loopATriangle(seven)).toBe(seven);
});
