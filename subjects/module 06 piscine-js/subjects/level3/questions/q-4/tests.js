// ::javascript
// ::header
// ::code

function isValid(date) {}
function isAfter(date, date2) {}
function isBefore(date, date2) {}
function isFuture(date) {}
function isPast(date) {}

// ::footer
const process = null;

let testcases = {
  isValid: [
    {
      args: [new Date()],
      answer: true,
    },
    {
      args: [new Date("")],
      answer: false,
    },
  ],
  isAfter: [
    {
      args: [new Date(2000, 6, 10), new Date(1987, 1, 11)],
      answer: true,
    },
  ],
  isBefore: [
    {
      args: [new Date(1989, 6, 10), new Date(1987, 1, 11)],
      answer: false,
    },
  ],
  isFuture: [
    {
      args: [new Date(2077, 11, 31)],
      answer: true,
    },
  ],
  isPast: [
    {
      args: [new Date(2010, 11, 31)],
      answer: true,
    },
  ],
};

let res = testcases.isValid.every((elem) => {
  let res = isValid(...elem.args);
  if (res != elem.answer) {
    console.log("Error\nisValid");
    console.log(`Input: ${elem.args}`);
    console.log(`Actual:  ${res}`);
    console.log(`Expected: ${elem.answer} `);
    return false;
  }
  return true;
});

let res1 = testcases.isAfter.every((elem) => {
  let res = isAfter(...elem.args);
  if (res != elem.answer) {
    console.log("Error\nisAfter");
    console.log(`Input: ${elem.args}`);
    console.log(`Actual:  ${res}`);
    console.log(`Expected: ${elem.answer} `);
    return false;
  }
  return true;
});
let res2 = testcases.isBefore.every((elem) => {
  let res = isBefore(...elem.args);
  if (res != elem.answer) {
    console.log("Error\nisBefore");
    console.log(`Input: ${elem.args}`);
    console.log(`Actual:  ${res}`);
    console.log(`Expected: ${elem.answer} `);
    return false;
  }
  return true;
});

let res3 = testcases.isFuture.every((elem) => {
  let res = isFuture(...elem.args);
  if (res != elem.answer) {
    console.log("Error\nisFuture");
    console.log(`Input: ${elem.args}`);
    console.log(`Actual:  ${res}`);
    console.log(`Expected: ${elem.answer} `);
    return false;
  }
  return true;
});
let res4 = testcases.isPast.every((elem) => {
  let res = isPast(...elem.args);
  if (res != elem.answer) {
    console.log("Error\nisPast");
    console.log(`Input: ${elem.args}`);
    console.log(`Actual:  ${res}`);
    console.log(`Expected: ${elem.answer} `);
    return false;
  }
  return true;
});

if (res && res1 && res2 && res3 && res4) {
  console.log("success");
}
