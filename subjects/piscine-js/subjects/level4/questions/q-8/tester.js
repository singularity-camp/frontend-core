// ::javascript
// ::header
// ::code

const isEmpty = (arr, result) => {
  //your code
};

// ::footer
const process = null;

let testcases = {
  isEmpty: [
    {
      args: [{}],
      answer: true,
    },
    {
      args: [{ a: undefined }],
      answer: true,
    },
    {
      args: [{ a: 1 }],
      answer: false,
    },
    {
      args: [{ a: 1, b: undefined }],
      answer: false,
    },
  ],
};

let res = testcases.isEmpty.every((elem) => {
  try {
    let res = isEmpty(...elem.args);
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
