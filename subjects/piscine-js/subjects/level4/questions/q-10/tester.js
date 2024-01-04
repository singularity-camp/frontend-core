// ::javascript
// ::header
// ::code

function invert(obj) {
  //your code
}

// ::footer
const process = null;

let testcases = {
  invert: [
    {
      args: [{}],
      answer: {},
    },
    {
      args: [{ a: 1, b: 2 }],
      answer: { 1: "a", 2: "b" },
    },
    {
      args: [{ a: 2, b: 2 }],
      answer: { 2: "a", 2: "b" },
    },
    {
      args: [{ a: 2, b: 1 }],
      answer: { 2: "a", 1: "b" },
    },
  ],
};

let res = testcases.invert.every((elem) => {
  try {
    let res = invert(...elem.args);
    if (JSON.stringify(res) != JSON.stringify(elem.answer)) {
      console.log("Error");
      console.log(`Input: ${JSON.stringify(elem.args)}`);
      console.log(`Actual: ${JSON.stringify(res)}`);
      console.log(`Expected: ${JSON.stringify(elem.answer)}`);
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
