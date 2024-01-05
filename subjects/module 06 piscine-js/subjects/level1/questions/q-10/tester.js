// ::javascript
// ::header
// ::code

//your code here
function pow(a, b) {
  //
}
// ::footer

const process = null;
Math = null;
let testcases = {
  pow: [
    {
      args: [1, 0],
      answer: 1,
    },
    {
      args: [0, 1],
      answer: 0,
    },
    {
      args: [2, 5],
      answer: 32,
    },
    {
      args: [2, 8],
      answer: 256,
    },
    {
      args: [8, 2],
      answer: 64,
    },
    {
      args: [5, 2],
      answer: 25,
    },
  ],
};

function check() {
  for (let elem of testcases.pow) {
    let res = pow(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`pow:`);
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  console.log("success");
}
check();
