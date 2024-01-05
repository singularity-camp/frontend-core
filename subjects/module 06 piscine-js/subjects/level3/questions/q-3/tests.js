// ::javascript
// ::header
// ::code

function Book(name) {
  this.name = name;
}

Book.prototype = {
  getName: function () {
    return this.name;
  },

  // ваш код
};

// ::footer
const process = null;

let testcases = {
  user: [
    {
      args: ["Book of Words"],
      answer: "BOOK OF WORDS",
    },
    {
      args: ["Bakytsyz Zhamal"],
      answer: "BAKYTSYZ ZHAMAL",
    },
    {
      args: ["Golden Horde"],
      answer: "GOLDEN HORDE",
    },
    {
      args: [""],
      answer: "",
    },
  ],
};

let res = testcases.user.every((elem) => {
  let book = new Book(...elem.args);
  let res = book.getUpperName();
  if (res != elem.answer) {
    console.log("Error");
    console.log(`Input: ${elem.args}`);
    console.log(`Actual:  ${res}`);
    console.log(`Expected: ${elem.answer} `);
    return false;
  }
  return true;
});

if (res) {
  console.log("success");
}
