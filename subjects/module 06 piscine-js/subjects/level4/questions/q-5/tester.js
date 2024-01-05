// ::javascript
// ::header
// ::code

function hasOddNumber(arr) {
  //your code
  return true;
}

// ::footer
const process = null;

let testcases = {
  hasOddNumber: [
    {
      args: [[1, 2, 2, 2, 2, 2, 4]],
      answer: true,
    },
    {
      args: [[2, 2, 2, 2, 2, 4]],
      answer: false,
    },
  ],
};

let res = testcases.hasOddNumber.every((elem) => {
  try {
    let res = hasOddNumber(...elem.args);
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
