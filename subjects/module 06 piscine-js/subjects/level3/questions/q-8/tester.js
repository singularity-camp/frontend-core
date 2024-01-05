// ::javascript
// ::header
// ::code

class UrlСonstructor {
  constructor(url) {}
}

// ::footer
const process = null;

(() => {
  let res = "";
  let ans = "";

  const showErr = (act, exp) => {
    console.log(`Error:\nExpected: ${exp}\nActual: ${act}`);
  };

  let constructor = new UrlСonstructor("https://jmart.kz/products");
  ans = "https://jmart.kz/products";
  res = constructor.construct();
  if (ans !== res) {
    showErr(res, ans);
    return false;
  }

  constructor.params.category_id = 2879;
  res = constructor.construct();
  ans = "https://jmart.kz/products?category_id=2879";
  if (ans !== res) {
    showErr(res, ans);
    return false;
  }

  constructor = new UrlСonstructor(
    "https://jmart.kz/products?category_id=2879"
  );
  ans = "2879";
  res = constructor.params.category_id;
  if (ans !== res) {
    showErr(res, ans);
    return false;
  }

  ans = undefined;
  res = constructor.params.test;
  if (ans !== res) {
    showErr(res, ans);
    return false;
  }

  ans = "https://jmart.kz/products";
  res = constructor.removeAll();
  if (ans !== res) {
    showErr(res, ans);
    return false;
  }

  let constructor2 = new UrlСonstructor("test.kz");
  constructor2.params.search = "what is love";
  ans = "test.kz?search=what%20is%20love";
  res = constructor2.construct();
  if (ans !== res) {
    showErr(res, ans);
    return false;
  }
  console.log("success");
})();
