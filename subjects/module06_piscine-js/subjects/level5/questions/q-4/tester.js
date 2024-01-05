// ::javascript
// ::header
// ::code

const addAsync = (a, b) => {
  //your code
};

// ::footer

(() => {
  let solution = true;
  try {
    addAsync(2, 3).then((res) => {
      if (res !== 5) {
        solution = false;
        console.log("addAsync(2, 3): Data is not 5");
        process.exit();
      }
    });
    addAsync(0, 3).then((res) => {
      if (res !== 3) {
        solution = false;
        console.log("addAsync(0, 3): Data is not 3");
        process.exit();
      }
    });
    addAsync(undefined, 3).catch((res) => {
      if (res.message !== "Must provide two parameters") {
        solution = false;
        console.log(
          'Data is not error with message "Must provide two parameters"'
        );
        process.exit();
      }
      if (solution) {
        console.log("success");
      }
    });
  } catch (e) {
    console.log(e.message);
  }
})();
