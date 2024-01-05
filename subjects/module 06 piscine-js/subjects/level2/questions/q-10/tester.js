// ::javascript
// ::header
// ::code

// const setToArr = (set) => {
//   //your code
// };

// const arrToSet = (arr) => {
//   //your code
// };

function arrToSet(arr) {
  return new Set(arr);
}
function setToArr(set) {
  return Array.from(set);
}

// ::footer
const process = null;

let testcases = {
  setToArr: [
    {
      args: [new Set([1, 2, 3])],
      answer: [1, 2, 3],
    },
    {
      args: [new Set([1, 2, 3])],
      answer: [1, 2, 3],
    },
  ],
  arrToSet: [
    {
      args: [[1, 2, 3, 3, 3]],
      answer: new Set([1, 2, 3]),
    },
    {
      args: [["ant", "bison", "camel", "duck", "bison"], "bison"],
      answer: new Set(["ant", "bison", "camel", "duck"]),
    },
  ],
};

let res1 = testcases.arrToSet.every((elem) => {
  try {
    let res = arrToSet(...elem.args);
    if (!eqSet(res, elem.answer)) {
      logErr("arrToSet", elem, res);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
});

let res2 = testcases.setToArr.every((elem) => {
  try {
    let res = setToArr(...elem.args);
    if (res.join("-") != elem.answer.join("-")) {
      logErr("setToArr", elem, res);
      return false;
    }
    return true;
  } catch (e) {
    console.log(e.message);
    return false;
  }
});

if (res1 && res2) {
  console.log("success");
}

function logErr(name, elem, res) {
  console.log("Error");
  console.log(`${name}:`);
  console.log(`Input: ${elem.args}`);
  console.log(`Actual: ${res}`);
  console.log(`Expected: ${elem.answer}`);
}

function eqSet(as, bs) {
  if (as.size !== bs.size) return false;
  for (var a of as) if (!bs.has(a)) return false;
  return true;
}
