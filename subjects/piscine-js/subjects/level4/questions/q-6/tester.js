// ::javascript
// ::header
// ::code

function adder(arr) {
  //your code
  return 0;
}

// ::footer
const process = null;

let testcases = {
  adder: [
    {
      args: [[1, 2, 2, 2, 2, 2, 4]],
      answer: 15,
    },
    {
      args: [[2, 2, 2, 2, 2, 4]],
      answer: 14,
    },
    {
      args: [[1, 2, 4, 5]],
      answer: 12,
    },
    {
      args: [[]],
      answer: 0,
    },
  ],
};

let res = testcases.adder.every((elem) => {
  try {
    let res = adder(...elem.args);
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
