// ::javascript
// ::header
// ::code

function isPlainObject(element) {
  // your code here ...
}

// ::footer
const process = null;

let testcases = {
  isPlainObject: [
    {
      args: [{}],
      answer: true,
    },
    {
      args: [-1, 3],
      answer: false,
    },
    {
      args: [() => {}],
      answer: false,
    },
    {
      args: [3],
      answer: false,
    },
    {
      args: [{ a: 3, b: 3 }],
      answer: true,
    },
  ],
};

let res = testcases.isPlainObject.every((elem) => {
  try {
    let res = isPlainObject(...elem.args);
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
