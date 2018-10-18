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
  if (width < 0 && height < 0) {
    console.log("Width and height must be positives!");
  } else {
    for (let i = 1; i <= height; i++) {
      if (i % 2 === 0) {
        let row = "";
        for (let i = 0; i < width; i++) {
          if (i % 2 === 0) row += "#";
          else row += " ";
        }
        console.log(row);
      } else {
        let row = "";
        for (let i = 0; i < width; i++) {
          if (i % 2 === 0) row += " ";
          else row += "#";
        }
        console.log(row);
      }
    }
  }
  return `${width} by ${height} grid`;
}
// console.log("\nCHESSBOARD:");
// chessboard(8, 8);

test("Console log N by N grid", () => {
  expect(chessboard(8, 8)).toMatch("8 by 8 grid");
});
