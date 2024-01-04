// ::javascript
// ::header
// ::code

function exists(obj, key) {
  //your code
}

// ::footer
const process = null;

let testcases = {
  exists: [
    {
      args: [{ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }, "red"],
      answer: true,
    },
    {
      args: [{ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }, "green"],
      answer: true,
    },
    {
      args: [{ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }, "white"],
      answer: true,
    },
    {
      args: [
        { nested: { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" } },
        "nested",
      ],
      answer: true,
    },
    {
      args: [
        { nested: { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" } },
        "kek",
      ],
      answer: false,
    },
  ],
};

let res = testcases.exists.every((elem) => {
  try {
    let res = exists(...elem.args);
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
