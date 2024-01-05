// ::javascript
// ::header
// ::code

function id(a) {
  //
}

function getLength(a) {
  //
}

// ::footer

const process = null;
let testcases = {
  id: [
    {
      args: [1],
      answer: 1,
    },
    {
      args: [2],
      answer: 2,
    },
    {
      args: [0],
      answer: 0,
    },
    {
      args: [-5],
      answer: -5,
    },
  ],

  getLength: [
    {
      args: [""],
      answer: 0,
    },
    {
      args: ["oPT6ZmQcPEpNXAgx"],
      answer: 16,
    },
    {
      args: ["ngV5JQgdpdfw"],
      answer: 12,
    },
    {
      args: ["fh"],
      answer: 2,
    },
  ],
};

function check() {
  for (let elem of testcases.id) {
    let res = id(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`id:`);
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  for (let elem of testcases.getLength) {
    let res = getLength(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`getLength:`);
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  console.log("success");
}
check();
