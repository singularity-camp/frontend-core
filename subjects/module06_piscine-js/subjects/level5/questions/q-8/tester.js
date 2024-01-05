// ::javascript
// ::header
// ::code

async function getJSON(path, params) {}

// ::footer
const process = null;

const fakeFetch = async ({ data, error, ...opts } = {}) => ({
  ok: !opts.status,
  type: "basic",
  status: 200,
  statusText: "OK",
  json: async () => ({ data, error }),
  text: async () => JSON.stringify({ data, error }),
  ...opts,
});

(() => {
  const tests = [];
  const t = (f) => tests.push(f);

  t(async ({ eq }) => {
    // check that it return the given value
    const data = Math.random();
    fetch = (url) => fakeFetch({ url, data });
    return eq(await getJSON("/", { q: 1 }), data);
  });

  t(async ({ eq }) => {
    // check that it throw an error with the correct message
    const error = `oops: ${Math.random()}`;
    fetch = (url) => fakeFetch({ url, error });

    return eq(
      await getJSON("/", { q: 1 }).then(
        () => Promise.reject(Error("Should fail")),
        (err) => err.message
      ),
      error
    );
  });

  t(async ({ eq }) => {
    // check that it throw if the request is not ok
    fetch = (url) =>
      fakeFetch({ url, status: 500, statusText: "Internal Server Error" });

    return eq(
      await getJSON("/", { q: 1 }).then(
        () => Promise.reject(Error("Should fail")),
        (err) => err.message
      ),
      "Internal Server Error"
    );
  });

  t(async ({ eq }) => {
    // if level 04 fetch fail, the error should not be handled
    const error = `oops: ${Math.random()}`;
    fetch = (url) => Promise.reject(Error(error));

    return eq(
      await getJSON("/", { q: 1 }).then(
        () => Promise.reject(Error("Should fail")),
        (err) => err.message
      ),
      error
    );
  });

  let solution = true;
  const eq = (a, ...b) => {
    if (a + "" !== b + "") {
      console.log("Error");
      console.log(`Actual: ${a} `);
      console.log(`Expected: ${b}`);
      solution = false;
    }
  };

  let res = tests.every((func) => {
    try {
      func({ eq });
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
