// ::javascript
// ::header
// ::code

function get(src, path) {
  // your code here ...
}

// ::footer
const process = null;

let testcases = {
  get: [
    {
      args: [{ key: "value" }, "key"],
      answer: "value",
    },
    {
      args: [{ nested: { key: "value" } }, "nested.key"],
      answer: "value",
    },
    {
      args: [{ key: "value" }, "nx"],
      answer: undefined,
    },
    {
      args: [{ nested: { key: "value" } }, "nested.nx"],
      answer: undefined,
    },
    {
      args: [{ nested: { key: "value" } }, "nx.nx"],
      answer: undefined,
    },
  ],
};

let res = testcases.get.every((elem) => {
  try {
    let res = get(...elem.args);
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
