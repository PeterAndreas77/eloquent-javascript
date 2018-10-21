//Write a function that computes the dominant writing direction in a string of text. The
//dominant direction is the direction of a majority of the characters that have a script
//associated with them. Remember that each script object has a direction property that can
//be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
const SCRIPTS = require("./scripts");
//This function is copied straight from the book
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}
//This function is also copied straight from the book
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
//This function is NOT copied from the book
function dominantDirection(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ direction }) => direction != "none");
  let dominant = scripts.reduce((a, b) => {
    return a.count > b.count ? a.name : b.name;
  });
  return dominant;
}

console.log(dominantDirection("ᠮᠣᠩᠭᠣᠯ ᠬᠡᠯᠡ")); //mongolian
console.log(dominantDirection("俄罗斯的狗说 英国的狗说")); //chinese
console.log(dominantDirection("مساء الخير")); //arabic
console.log(dominantDirection("rose 🌹, dragon 🐉, horse 🐴, shoe 👟")); //emojis
