// FizzBuzz
// Write a program that uses console.log to print all the numbers from 1 to 100, with two
//exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers
//divisible by 5 (and not 3), print "Buzz" instead.
// When you have that working, modify your program to print "FizzBuzz" for numbers that are
//divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only
//one of those).
function fizzBuzz(int) {
  //Input sanitization
  if (!int) return "Please provide a number";
  if (isNaN(int)) return "Must be a number";
  if (int <= 0) return "Number must be bigger than 0 and positive";

  let fixbux = "";
  for (let i = 1; i <= int; i++) {
    if (i % 5 === 0 && i % 3 === 0) fixbux += "\nFizz Buzz";
    else if (i % 3 === 0) fixbux += "\nFizz";
    else if (i % 5 === 0) fixbux += "\nBuzz";
    else fixbux += `\n${i}`;
  }
  return fixbux;
}
// console.log(fizzBuzz(15));
// console.log(fizzBuzz());
// console.log(fizzBuzz(-12));
// console.log(fizzBuzz("asdasd"));

test("It prints out fizzbuzz properly", () => {
  const int = 15;
  expect(fizzBuzz(int)).toBe(
    "\n1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizz Buzz"
  );
  expect(fizzBuzz()).toEqual("Please provide a number");
  expect(fizzBuzz(-12)).toEqual("Number must be bigger than 0 and positive");
  expect(fizzBuzz("asdasd")).toEqual("Must be a number");
});
