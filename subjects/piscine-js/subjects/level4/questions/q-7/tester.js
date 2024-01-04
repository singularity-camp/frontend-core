// ::javascript
// ::header
// ::code

const sumOrMul = (arr, result) => {
  //your code
};

// ::footer
const process = null;

let testcases = {
  sumOrMul: [
    {
      args: [[1, 2, 2, 2, 2, 2, 4]],
      answer: 128,
    },
    {
      args: [[18, 17, 7, 13, 25], 12],
      answer: 278,
    },
    {
      args: [[8, 16, 7, 0, 32]],
      answer: 0,
    },
    {
      args: [[8, 16, 7, 0, 31]],
      answer: 31,
    },
  ],
};

let res = testcases.sumOrMul.every((elem) => {
  try {
    let res = sumOrMul(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
});

if (res) {
  console.log("success");
}
