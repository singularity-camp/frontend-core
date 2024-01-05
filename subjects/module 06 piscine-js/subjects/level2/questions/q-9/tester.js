// ::javascript
// ::header
// ::code

const operation = (a, b, operation) => {
  //your code
};

// ::footer
const process = null;

let testcases = {
  operation: [
    {
      args: [1, 2, "add"],
      answer: 3,
    },
    {
      args: [1, 2, "sub"],
      answer: -1,
    },
    {
      args: [2, 2, "div"],
      answer: 1,
    },
    {
      args: [2, 2, "mult"],
      answer: 4,
    },
    {
      args: [2, 0, "mult"],
      answer: 0,
    },
    {
      args: [2, 0, "div"],
      answer: Infinity,
    },
    {
      args: [0, 0, "div"],
      answer: NaN,
    },
  ],
};

let res = testcases.operation.every((elem) => {
  try {
    let res = operation(...elem.args);
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
