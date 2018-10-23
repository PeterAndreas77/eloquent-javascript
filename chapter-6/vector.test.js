//Write a class Vec that represents a vector in two-dimensional space. It takes x and y
//parameters (numbers), which it should save to properties of the same name.
//Give the Vec prototype two methods, plus and minus, that take another vector as a
//parameter and return a new vector that has the sum or difference of the two vectors’
//(this and the parameter) x and y values.
//Add a getter property length to the prototype that computes the length of the vector—that
//is, the distance of the point (x, y) from the origin (0, 0).
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(newVec) {
    return new Vec(this.x + newVec.x, this.y + newVec.y);
  }

  minus(newVec) {
    return new Vec(this.x - newVec.x, this.y - newVec.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}
// console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// console.log(new Vec(4, 3).length);
describe("Class Vec", () => {
  test("Receive the right parameters", () => {
    const vector = new Vec(10, 20);
    const vecalp = new Vec("a", "b");
    expect(vector.x).toBe(10);
    expect(vector.y).toBe(20);
    expect(vecalp.x).toBe("a");
    expect(vecalp.y).toBe("b");
  });

  test("Plus method works", () => {
    const plus1 = new Vec(1, 2).plus(new Vec(1, 2));
    const plus2 = new Vec(-1, 2).plus(new Vec(1, -2));
    const plus3 = new Vec(-1, -2).plus(new Vec(-1, -2));
    expect(plus1).toEqual({ x: 2, y: 4 });
    expect(plus2).toEqual({ x: 0, y: 0 });
    expect(plus3).toEqual({ x: -2, y: -4 });
  });

  test("Minus method works", () => {
    const minus1 = new Vec(1, 2).minus(new Vec(1, 2));
    const minus2 = new Vec(-1, 2).minus(new Vec(1, -2));
    const minus3 = new Vec(-1, -2).minus(new Vec(-1, -2));
    expect(minus1).toEqual({ x: 0, y: 0 });
    expect(minus2).toEqual({ x: -2, y: 4 });
    expect(minus3).toEqual({ x: 0, y: 0 });
  });

  test("Length method works", () => {
    const length1 = new Vec(3, 4).length;
    const length2 = new Vec(6, -6).length;
    const length3 = new Vec(-4, -4).length;
    expect(length1).toBe(5);
    expect(length2).toBe(8.48528137423857);
    expect(length3).toBe(5.656854249492381);
  });
});
