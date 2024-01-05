// ::javascript
// ::header
// ::code

//your code here

// ::footer

const process = null;
let testcases = {
  last: [
    {
      args: ["Almaty"],
      answer: "y",
    },
    {
      args: [""],
      answer: "",
    },
    {
      args: ["oPT6ZmQcPEpNXAgx"],
      answer: "x",
    },
    {
      args: ["ngV5JQgdpdfw"],
      answer: "w",
    },
    {
      args: ["fh"],
      answer: "h",
    },
  ],

  first: [
    {
      args: ["Almaty"],
      answer: "A",
    },
    {
      args: [""],
      answer: "",
    },
    {
      args: ["oPT6ZmQcPEpNXAgx"],
      answer: "o",
    },
    {
      args: ["ngV5JQgdpdfw"],
      answer: "n",
    },
    {
      args: ["fh"],
      answer: "f",
    },
  ],
};

function check() {
  for (let elem of testcases.first) {
    let res = first(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`first:`);
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  for (let elem of testcases.last) {
    let res = last(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`last:`);
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  console.log("success");
}
check();
