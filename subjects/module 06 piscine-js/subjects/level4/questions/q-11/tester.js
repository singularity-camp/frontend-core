// ::javascript
// ::header
// ::code

const zip = (...arguments) => {
  //your code
};

// ::footer
const process = null;

let testcases = {
  zip: [
    {
      args: [
        { foo: 5, bar: 6 },
        { foo: 13, baz: -1 },
      ],
      answer: { foo: 5, bar: 6, baz: -1 },
    },
    {
      args: [{ foo: 5, bar: 6 }, { baz: -1 }],
      answer: { foo: 5, bar: 6, baz: -1 },
    },
    {
      args: [{ foo: 2 }, { bar: 2 }],
      answer: { foo: 2, bar: 2 },
    },
    {
      args: [{ a: 2 }],
      answer: { a: 2 },
    },
  ],
};

let res = testcases.zip.every((elem) => {
  try {
    let res = zip(...elem.args);
    if (!equals(res, elem.answer)) {
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

function equals(x, y) {
  for (p in y) {
    switch (typeof y[p]) {
      case "object":
        if (!y[p].equals(x[p])) {
          return false;
        }
        break;
      case "function":
        if (
          typeof x[p] == "undefined" ||
          (p != "equals" && y[p].toString() != x[p].toString())
        ) {
          return false;
        }
        break;
      default:
        if (y[p] != x[p]) {
          return false;
        }
    }
  }

  for (p in x) {
    if (typeof y[p] == "undefined") {
      return false;
    }
  }

  return true;
}
