//Write a higher-order function loop that provides something like a for loop statement. It
//takes a value, a test function, an update function, and a body function. Each iteration,
//it first runs the test function on the current loop value and stops if that returns false.
//Then it calls the body function, giving it the current value. Finally, it calls the update
//function to create a new value and starts from the beginning.
function loopWithWhile(num, test, update, body) {
  //Input sanitization
  if (!test || typeof test != "function")
    return "Please provide a test function";
  if (!update || typeof update != "function")
    return "Please provide a update function";
  if (!body || typeof body != "function")
    return "Please provide a body function";

  while (test(num)) {
    body(num);
    num = update(num);
  }
  return num;
}
// loopWithWhile(3, n => n > 0, n => n - 1, console.log);

test("Loop with while perfectly", () => {
  const test = n => n > 0;
  const update = n => n - 1;
  expect(loopWithWhile(3, test, update, console.log)).toEqual(0);
  expect(loopWithWhile(3)).toEqual("Please provide a test function");
  expect(loopWithWhile(3, test)).toEqual("Please provide a update function");
  expect(loopWithWhile(3, test, update)).toEqual(
    "Please provide a body function"
  );
});

function loopWithFor(num, test, update, body) {
  //Input sanitization
  if (!test || typeof test != "function")
    return "Please provide a test function";
  if (!update || typeof update != "function")
    return "Please provide a update function";
  if (!body || typeof body != "function")
    return "Please provide a body function";

  for (let i = num; test(i); i = update(i)) {
    body(i);
  }
}

// loopWithFor(3, n => n > 0, n => n - 1, console.log);

test("Loop with for perfectly", () => {
  const test = n => n > 0;
  const update = n => n - 1;
  expect(loopWithFor(3, test, update, console.log)).toBe(undefined);
  expect(loopWithFor(3)).toEqual("Please provide a test function");
  expect(loopWithFor(3, test)).toEqual("Please provide a update function");
  expect(loopWithFor(3, test, update)).toEqual(
    "Please provide a body function"
  );
});
