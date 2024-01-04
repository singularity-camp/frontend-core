# getJson

Создайте функцию `getJSON`, которая принимает 2 параметра:

- `path` - url, к котрому будет обращаться функция
- `params` - необязательный параметр, параметры для поиска по url

`getJSON` должен построить действительный URL-адрес с путем и строковыми параметрами и вызвать с ним `fetch`. Если в ответ приходит ошибка, ваша функция должна выдать ее, используя сообщение о статусе ответа.

Затем вам нужно прочитать и спарсить body из JSON.

Разобранный объект содержит одно из этих двух свойств:

- `data` данные для возврата
- `error` сообщение об ошибке, которое нужно выдать

Полезные ссылки:

<pre>
<code>
<a href="devdocs.io/dom/fetch_api/using_fetch
">devdocs.io/dom/fetch_api/using_fetch</a>
<a href="devdocs.io/dom/urlsearchparams
">devdocs.io/dom/urlsearchparams</a>
<a href="devdocs.io/javascript/global_objects/json
">devdocs.io/javascript/global_objects/json</a>
</code>
</pre>

Ответ:

```jsx
async function getJSON(path, params) {
  const url = `${path}${
    Object.keys(params).length > 0
      ? `?${Object.keys(params)
          .map(
            (key) =>
              encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
          )
          .join("&")}`
      : ""
  }`;
  let result = await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      if (json.error) {
        throw new Error(json.error);
      }
      return json.data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
  if (result == null) {
    throw new Error("Internal Server Error");
  }
  return result;
}
```
