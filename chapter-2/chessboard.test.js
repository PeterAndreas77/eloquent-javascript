// Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline
//characters to separate lines. At each position of the grid there is either a space or a
//"#" character. The characters should form a chessboard.
// Passing this string to console.log should show something like this:
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
// When you have a program that generates this pattern, define a binding size = 8 and
//change the program so that it works for any size, outputting a grid of the given width
//and height.
function chessboard(width, height) {
  let grid = "";
  //Input sanitization
  if (!width || !height) {
    return "Please provide both width and height";
  } else if (width < 0 && height < 0) {
    return "Width and height must be positives!";
  } else {
    for (let i = 1; i <= height; i++) {
      if (i % 2 === 0) {
        let row = "";
        for (let i = 0; i < width; i++) {
          if (i % 2 === 0) row += "#";
          else row += " ";
        }
        grid += "\n" + row;
      } else {
        let row = "";
        for (let i = 0; i < width; i++) {
          if (i % 2 === 0) row += " ";
          else row += "#";
        }
        grid += "\n" + row;
      }
    }
  }
  return grid;
}
// console.log(chessboard(8, 8));
// console.log(chessboard(1));
// console.log(chessboard());

test("Console log N by N grid", () => {
  const N = 4;
  const result = "\n # #\n# # \n # #\n# # ";
  expect(chessboard(N, N)).toMatch(result);
  expect(chessboard(1)).toEqual("Please provide both width and height");
  expect(chessboard(-12, -2)).toEqual("Width and height must be positives!");
});
