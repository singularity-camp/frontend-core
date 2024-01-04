# urlСonstructor

Создайте класс `UrlСonstructor`, который будет использоваться специально для построения параметров запроса на существующем `URI`. `UrlСonstructor` должен обрабатывать URL-адрес с уже существующими параметрами. URL-адрес должен быть правильно закодирован (например, «ищу котенка» должен быть закодирован как `ищу%20котенка`).

Методы которые нужно обязательно реализовать:

- `construct()`
- `removeAll()`

Пример использования класса:

```jsx
let constructor = new UrlСonstructor("https://jmart.kz");
constructor.params.category_id = 2879;

constructor.construct(); //https://jmart.kz/products?category_id=2879

constructor = new UrlСonstructor("https://jmart.kz/products?category_id=2879");
constructor.params.category_id; //2879
constructor.params.test; //undefined

constructor.removeAll();
constructor.construct(); // https://jmart.kz
```

Ответ:

```jsx
class UrlСonstructor {
  constructor(input) {
    this.url = input;
    this.baseUrl = this.url.split("?")[0];
    this.params = this.getExistingParams();
  }

  construct() {
    var res =
      Object.keys(this.params).length > 0 ? this.baseUrl + "?" : this.baseUrl;
    for (var key in this.params) {
      if (this.params.hasOwnProperty(key)) {
        res += key.toString() + "=" + encodeURI(this.params[key]) + "&";
      }
    }
    return Object.keys(this.params).length > 0 ? res.slice(0, -1) : res;
  }

  getExistingParams() {
    var qp = this.url.split("?");
    var paramList = {};
    if (qp.length > 1) {
      qp[1].split("&").map(function (value) {
        var pair = value.split("=");
        paramList[pair[0]] = pair[1];
      });
    }
    return paramList;
  }

  removeAll() {
    this.baseUrl = this.baseUrl.split("?")[0];
    return this.baseUrl;
  }
}
```
