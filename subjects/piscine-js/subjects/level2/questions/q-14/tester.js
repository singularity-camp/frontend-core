// ::javascript
// ::header
// ::code

function canGetCount(n) {
  let count = 0;
  return function check() {
    return "yes";
  };
}

const getOne = canGetCount(2);

getOne(); // yes
getOne(); // yes
getOne(); // no
// ::footer
const process = null;

const testcases = [
  { args: [3], ans: "yes yes no " },
  { args: [4], ans: "yes yes yes no " },
  { args: [2], ans: "yes no " },
  { args: [1], ans: "no " },
];

let res = testcases.every((elem) => {
  try {
    let i = -1;
    let res = "";
    const getOne = canGetCount(elem.args - 1);
    while (++i < elem.args) {
      res = res + getOne() + " ";
    }
    if (res !== elem.ans) {
      console.log("Error");
      console.log(`Input: ${elem.args - 1}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.ans}`);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
  }
});

if (res) {
  console.log("success");
}
