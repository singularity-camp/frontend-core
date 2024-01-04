// ::javascript
// ::header
// ::code

function sum(a, b) {
  // your code here ...
}

// ::footer
const process = null;

let testcases = [
  {
    args: [1, 2],
    answer: 3,
  },
  {
    args: [-1, 3],
    answer: 2,
  },
  {
    args: [0, 7],
    answer: 7,
  },
  {
    args: [-5, 7],
    answer: 2,
  },
];

let res = testcases.every((elem) => {
  let res = sum(...elem.args);
  if (res != elem.answer) {
    console.log("Error");
    console.log(`Input: ${elem.args}`);
    console.log(`Actual: ${res}`);
    console.log(`Expected: ${elem.answer}`);
    return false;
  }
  return true;
});

if (res) {
  console.log("success");
}
