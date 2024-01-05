// ::javascript
// ::header
// ::code

//your code here
function concatStr(a, b) {
  //
}
// ::footer

const process = null;
let testcases = {
  concatStr: [
    {
      args: ["Alma", "ty"],
      answer: "Almaty",
    },
    {
      args: ["0R9sDyih9Xvkuqtt", "FZV"],
      answer: "0R9sDyih9XvkuqttFZV",
    },
    {
      args: ["fdM", ""],
      answer: "fdM",
    },
    {
      args: ["", "Z5ZUg"],
      answer: "Z5ZUg",
    },
    {
      args: ["7FzzFMF", "vmcIXGb"],
      answer: "7FzzFMFvmcIXGb",
    },
  ],
};

function check() {
  for (let elem of testcases.concatStr) {
    let res = concatStr(...elem.args);
    if (res != elem.answer) {
      console.log("Error");
      console.log(`Input: ${elem.args}`);
      console.log(`Actual: ${res}`);
      console.log(`Expected: ${elem.answer}`);
      return false;
    }
  }

  console.log("success");
}
check();
