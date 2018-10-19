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

  for (let i = 1; i <= int; i++) {
    if (i % 5 === 0 && i % 3 === 0) console.log("Fizz Buzz");
    else if (i % 3 === 0) console.log("Fizz");
    else if (i % 5 === 0) console.log("Buzz");
    else console.log(i);
  }
  return int;
}
// console.log(fizzBuzz(15));
// console.log(fizzBuzz());
// console.log(fizzBuzz(-12));
// console.log(fizzBuzz("asdasd"));

test("It prints out fizzbuzz properly", () => {
  const int = 100;
  expect(fizzBuzz(int)).toBe(int);
  expect(fizzBuzz()).toEqual("Please provide a number");
  expect(fizzBuzz(-12)).toEqual("Number must be bigger than 0 and positive");
  expect(fizzBuzz("asdasd")).toEqual("Must be a number");
});
