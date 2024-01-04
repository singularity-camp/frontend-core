// ::javascript
// ::header
// ::code

const object = {
  value: "11",
  print() {
    function type() {
      return typeof this.value;
    }
    console.log(`${this.value} is ${type()}`);
    return type;
  },
};

object.print(); // Поправьте замыкание

// ::footer
const process = null;

const testcases = [
  { args: false, ans: "boolean" },
  { args: "22", ans: "string" },
  { args: 2, ans: "number" },
];

let res = testcases.every((elem) => {
  try {
    object.value = elem.args;
    let res = object.print()();
    if (res !== elem.ans) {
      console.log("Error");
      console.log(`Value: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.ans}`);
      return false;
    }
  } catch (e) {
    console.log(e.message);
    return false;
  }
  return true;
});

if (res) {
  console.log("success");
}

// false is string
// 22 is string
// 2 is string
// success
