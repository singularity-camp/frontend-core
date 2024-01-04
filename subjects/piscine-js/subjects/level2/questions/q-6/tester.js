// ::javascript
// ::header
// ::code

const compact = () => {
  // your code
};

// ::footer
const process = null;

let testcases = {
  compact: [
    {
      args: [[0, 1, false, 2, undefined, "", 3, null]],
      answer: [1, 2, 3],
    },
    {
      args: [[0, 1, false, 2, undefined, "", 3, null, false]],
      answer: [1, 2, 3],
    },
    {
      args: [[1, 2, 3]],
      answer: [1, 2, 3],
    },
    {
      args: [[]],
      answer: [],
    },
    {
      args: [[""]],
      answer: [],
    },
  ],
};

let res = testcases.compact.every((elem) => {
  try {
    let res = compact(...elem.args);
    if (!equals(res, elem.answer)) {
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

function equals(array, array2) {
  if (array2.length != array.length) return false;
  for (var i = 0, l = array2.length; i < l; i++) {
    if (array2[i] instanceof Array && array[i] instanceof Array) {
      if (!array2[i].equals(array[i])) return false;
    } else if (array2[i] != array[i]) {
      return false;
    }
  }
  return true;
}
