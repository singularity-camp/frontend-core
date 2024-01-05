// ::javascript
// ::header
// ::code

class User {
  constructor(name) {
    this.name = name;
  }
  //your code
}

// ::footer
const process = null;

let testcases = {
  user: [
    {
      args: ["Oleg", "Matrosov"],
      answer: "Oleg Matrosov",
    },
    {
      args: ["Oleg", "Matrosova"],
      answer: "Oleg Matrosova",
    },
    {
      args: ["", "Matrosov"],
      answer: " Matrosov",
    },
    {
      args: ["", ""],
      answer: " ",
    },
  ],
};

let res = testcases.user.every((elem) => {
  let user = new User(...elem.args);
  let res = user.getFullname();
  if (res != elem.answer) {
    console.log("Error");
    console.log(`Input: ${elem.args}`);
    console.log(`Actual: ${res}`);
    console.log(`Expected: ${elem.answer}`);
    return false;
  }
  return true;
});

if (res) {
  console.log("success");
}
