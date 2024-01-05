// ::javascript
// ::header
// ::code

const indexOf = (a, b) => {
  //your code
};

const lastIndexOf = (a, b) => {
  //your code
};

const includes = (a, b) => {
  //your code
};

// ::footer
const process = null;
Array.prototype.indexOf = null;
Array.prototype.lastIndexOf = null;
Array.prototype.includes = null;

let testcases = {
  indexOf: [
    {
      args: [[1, 2, 3, 4, 5, 4, 3, 2, 1], 2],
      answer: 1,
    },
    {
      args: [["ant", "bison", "camel", "duck", "bison"], "bison"],
      answer: 1,
    },
  ],
  lastIndexOf: [
    {
      args: [[1, 2, 3, 4, 5, 4, 3, 2, 1], 2],
      answer: 7,
    },
    {
      args: [["ant", "bison", "camel", "duck", "bison"], "bison"],
      answer: 4,
    },
  ],
  includes: [
    {
      args: [[1, 2, 3, 4, 5, 4, 3, 2, 1], 2],
      answer: true,
    },
    {
      args: [["ant", "bison", "camel", "duck", "bison"], "bison"],
      answer: true,
    },
  ],
};

let res1 = testcases.indexOf.every((elem) => {
  try {
    let res = indexOf(...elem.args);
    if (res != elem.answer) {
      logErr("indexOf", elem, res);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
});

let res2 = testcases.lastIndexOf.every((elem) => {
  try {
    let res = lastIndexOf(...elem.args);
    if (res != elem.answer) {
      logErr("lastIndexOf", elem, res);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
});
let res3 = testcases.includes.every((elem) => {
  try {
    let res = includes(...elem.args);
    if (res != elem.answer) {
      logErr("includes", elem, res);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
});

if (res1 && res2 && res3) {
  console.log("success");
}

function logErr(name, elem, res) {
  console.log("Error");
  console.log(`${name}:`);
  console.log(`Input: ${elem.args}`);
  console.log(`Actual: ${res}`);
  console.log(`Expected: ${elem.answer}`);
}
