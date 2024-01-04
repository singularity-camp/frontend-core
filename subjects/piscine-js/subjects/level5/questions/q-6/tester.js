// ::javascript
// ::header
// ::code

function retry(count, callback) {
  //your code
}

// ::footer
const process = null;

(() => {
  const setup = () => ({
    r: Math.random().toString(36).slice(2),
    failNTimes:
      (n) =>
      async (...v) =>
        --n < 0 ? v : Promise.reject(Error(`x:${v}`)),
    delayed:
      (delay) =>
      (...v) =>
        new Promise((s) => setTimeout(s, delay, v)),
  });

  const fail = (q) =>
    q.then(
      (v) => Promise.reject("should fail"),
      (e) => e.message
    );

  const tests = [];
  const t = (f) => tests.push(f);
  let solution = true;
  const eq = (a, ...b) => {
    if (a + "" !== b + "") {
      console.log("Error");
      console.log(`Actual: ${a} `);
      console.log(`Expected: ${b}`);
      solution = false;
    }
  };

  t(async ({ eq, ctx }) =>
    eq(await retry(0, ctx.failNTimes(0))(ctx.r), [ctx.r])
  );
  t(async ({ eq, ctx }) =>
    eq(await retry(10, ctx.failNTimes(5))(ctx.r, ctx.r), [ctx.r], [ctx.r])
  );
  t(async ({ eq, ctx }) =>
    eq(await fail(retry(3, ctx.failNTimes(9))(ctx.r)), `x:${ctx.r}`)
  );

  let res = tests.every((func) => {
    try {
      func({ eq, ctx: setup() });
      if (!solution) {
        return false;
      }
      return true;
    } catch (e) {
      console.log(e.message);
      return false;
    }
  });
  if (solution && res) {
    console.log("success");
  }
})();
