//The standard JavaScript environment provides another data structure called Set. Like an
//instance of Map, a set holds a collection of values. Unlike Map, it does not associate
//other values with those—it just tracks which values are part of the set. A value can be
//part of a set only once—adding it again doesn’t have any effect.
//Write a class called Group (since Set is already taken). Like Set, it has add, delete,
//and has methods. Its constructor creates an empty group, add adds a value to the group
//(but only if it isn’t already a member), delete removes its argument from the group
//(if it was a member), and has returns a Boolean value indicating whether its argument
//is a member of the group.
//Use the === operator, or something equivalent such as indexOf, to determine whether two
//values are the same.
//Give the class a static from method that takes an iterable object as argument and creates
//a group that contains all the values produced by iterating over it.
class Group {
  constructor() {
    this.values = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.values.push(value);
    } else
      console.log(`${value} is already added, choose another number to add.`);
  }

  has(value) {
    return this.values.includes(value);
  }

  delete(value) {
    if (!this.has(value)) console.log(`${value} is not in the collection.`);
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

let groupX = Group.from([10, 20]);
console.log(groupX.values);
groupX.add(10);
groupX.delete(10);
groupX.delete(10);
console.log(groupX.has(10));
groupX.add(10);
console.log(groupX.has(10));
