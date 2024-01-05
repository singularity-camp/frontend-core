// ::javascript
// ::header
// ::code

const timeout = (delay, callback) => {
  //your code
};

// ::footer
const process = null;

(async () => {
  try {
    const sum = (...a) => {
      return a.reduce((a, b) => a + b, 0);
    };

    const delayed =
      (delay) =>
      (...v) =>
        new Promise((res) => setTimeout(res, delay, v));

    let r = await timeout(3000, delayed(1000))(2, 3)
      .then((res) => res)
      .catch((err) => err.message);

    let r2 = await timeout(0, delayed(1000))(2, 3)
      .then((res) => res)
      .catch((err) => err.message); //timeout

    let r3 = await timeout(1000, sum)(2, 3)
      .then((res) => res)
      .catch((err) => err);

    if (r.join("") === "23" && r2 === "timeout" && r3 === 5) {
      console.log("success");
    } else {
      console.log("Error, timeout works wrong");
    }
  } catch (e) {
    console.log(e.message);
  }
})();
