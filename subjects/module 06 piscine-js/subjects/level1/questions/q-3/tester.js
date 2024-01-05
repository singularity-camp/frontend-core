// ::javascript
// ::header
// ::code

// your code here ...

// ::footer
const process = null;

let isStr = false;
let isBool = false;
let isUndef = false;
let isNum = false;

if (typeof str === "string" || str instanceof String) {
  isStr = true;
}

if (typeof bool == "boolean" || bool instanceof Boolean) {
  isBool = true;
}

if (typeof num == "number" || num instanceof Number) {
  isNum = true;
}

if (typeof undef == "undefined" || undef === undefined) {
  isUndef = true;
}

if (isStr && isBool && isUndef && isNum) {
  console.log("success");
} else {
  if (!isStr) {
    console.log("Error, wrong string variable");
  }
  if (!isNum) {
    console.log("Error, wrong number variable");
  }
  if (!isBool) {
    console.log("Error, wrong boolean variable");
  }
  if (!isUndef) {
    console.log("Error, wrong undefined variable");
  }
}
