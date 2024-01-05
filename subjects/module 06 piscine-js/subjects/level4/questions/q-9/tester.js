// ::javascript
// ::header
// ::code

const isEqual2 = (arr1, arr2) => {
  //your code
};

// ::footer
const process = null;

let testcases = {
  isEqual2: [
    {
      args: [{}, {}],
      answer: true,
    },
    {
      args: [
        { a: 1, b: 2 },
        { a: 1, b: 2 },
      ],
      answer: true,
    },
    {
      args: [
        { a: 2, b: 2 },
        { a: 2, b: 2 },
      ],
      answer: true,
    },
    {
      args: [
        { a: 2, b: 1 },
        { a: 2, b: 2 },
      ],
      answer: false,
    },
  ],
};

let res = testcases.isEqual2.every((elem) => {
  try {
    let res = isEqual2(...elem.args);
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
