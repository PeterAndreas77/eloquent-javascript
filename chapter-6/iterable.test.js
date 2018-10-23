//Make the Group class from the previous exercise iterable. Refer to the section about the
//iterator interface earlier in the chapter if you aren’t clear on the exact form of the
//interface anymore.
//If you used an array to represent the group’s members, don’t just return the iterator
//created by calling the Symbol.iterator method on the array. That would work, but it
//defeats the purpose of this exercise.
//It is okay if your iterator behaves strangely when the group is modified during iteration.
class Group {
  constructor() {
    this.values = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.values.push(value);
    } else return `${value} is already in the collection.`;
  }

  has(value) {
    return this.values.includes(value);
  }

  delete(value) {
    if (!this.has(value)) return `${value} is not in the collection.`;
    else {
      this.values = this.values.filter(n => n !== value);
    }
  }

  static from(values) {
    let group = new Group();
    for (let value of values) {
      group.add(value);
    }
    return group;
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }

  next() {
    if (this.index === this.group.values.length) {
      return { done: true };
    } else {
      let value = this.group.values[this.index];
      this.index++;
      return { value, done: false };
    }
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
};

// let groupY = Group.from([1, 2, 3]);
// for (let value of groupY) {
//   console.log(value);
// }

// let groupZ = Group.from(["a", "b", "c"]);
// for (let value of groupZ) {
//   console.log(value);
// }

test("Iteration works", () => {
  const result1 = [];
  const result2 = [];
  let group1 = Group.from([1, 2, 3]);
  for (let value of group1) {
    result1.push(value);
  }
  let group2 = Group.from(["a", "b", "c"]);
  for (let value of group2) {
    result2.push(value);
  }
  expect(group1.values).toEqual(result1);
  expect(group2.values).toEqual(result2);
});
