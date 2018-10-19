// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The
//returned value will be a string containing only one character (for example, "b"). The
//first character has position 0, which causes the last one to be found at position
//string.length - 1. In other words, a two-character string has length 2, and its characters
//have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number
//that indicates how many uppercase “B” characters there are in the string.
function countBs(str) {
  //Input sanitization
  if (!str || typeof str != "string") return "Please provide a string";

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "B") count++;
  }
  return count;
}
// console.log("String BBC has", countBs("BBC"), "B");
// console.log("String AAA has", countBs("AAA"), "B");
// console.log(countBs());
// console.log(countBs(2));

test("Count B to count properly", () => {
  expect(countBs("AAAA")).toBe(0);
  expect(countBs("BBBB")).toBe(4);
  expect(countBs()).toEqual("Please provide a string");
  expect(countBs(2)).toEqual("Please provide a string");
});

// Next, write a function called countChar that behaves like countBs, except it takes a
//second argument that indicates the character that is to be counted (rather than counting
//only uppercase “B” characters). Rewrite countBs to make use of this new function.
function countChar(str, char) {
  //Input sanitization
  if (!str || typeof str != "string") return "Please provide a string";
  if (!char) return "Please provide a char to match";

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}
// const sentence = "a unicorn is magical";
// console.log(`The sentence ${sentence} has`, countChar(sentence, "z"), "z");
// console.log(`The sentence ${sentence} has`, countChar(sentence, "a"), "a");
// console.log(countChar(1, "a"));
// console.log(countChar(sentence));

test("Count characters in a string properly", () => {
  expect(countChar(sentence, "a")).toBe(3);
  expect(countChar(sentence, "z")).toBe(0);
  expect(countChar(sentence)).toEqual("Please provide a char to match");
  expect(countChar(1, "a")).toEqual("Please provide a string");
});
