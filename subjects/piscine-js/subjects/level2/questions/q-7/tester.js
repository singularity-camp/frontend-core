// ::javascript
// ::header
// ::code

const unique = (array) => {
  //your code
};

// ::footer
const process = null;

let testcases = {
  unique: [
    {
      args: [[1, 2, 1, 2, 3]],
      answer: [1, 2, 3],
    },
    {
      args: [[]],
      answer: [],
    },
    {
      args: [[1, 2, 3, 3]],
      answer: [1, 2, 3],
    },
    {
      args: [[56, 22, 33, 3]],
      answer: [56, 22, 33, 3],
    },
    {
      args: [[1, 1, 1, 1, 1, 1, 1, 1, 1]],
      answer: [1],
    },
  ],
};

let res = testcases.unique.every((elem) => {
  try {
    let res = unique(...elem.args);
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

if (res) {
  console.log("success");
}
