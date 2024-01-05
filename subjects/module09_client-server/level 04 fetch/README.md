# Fetch API

> [Метод `fetch`](https://medium.com/webbdev/fetch-3d0b811ffcb5) — это `XMLHttpRequest` нового поколения. Он предоставляет улучшенный интерфейс для осуществления запросов к серверу: как по части возможностей и контроля над происходящим, так и по синтаксису, так как построен на промисах.

### Синтаксис

Синтаксис метода `fetch`:

```jsx
let promise = fetch(url, [, options]);
```

- `url` – URL, на который нужно отправить запрос
- `options` – необязательный объект с настройками запроса.

Свойства `options` (различные свойства запроса):

- `method` – метод запроса,
- `headers` – заголовки запроса (объект),
- `body` – тело запроса: FormData, Blob, строка и т.п.
- `mode` – одно из: «same-origin», «no-cors», «cors», указывает, в каком режиме кросс-доменности предполагается делать запрос.
- `credentials` – одно из: «omit», «same-origin», «include», указывает, пересылать ли куки и заголовки авторизации вместе с запросом.
- `cache` – одно из «default», «no-store», «reload», «no-cache», «force-cache», «only-if-cached», указывает, как кешировать запрос.
- `redirect` – можно поставить «follow» для обычного поведения при коде 30x (следовать редиректу) или «error» для интерпретации редиректа как ошибки.

В проекте вы будете использовать Fetch API.

## Response

При вызове `fetch` возвращает `Promise`, который выполняет коллбэки с объектом `Response` или с ошибкой, если запрос не удался.
Объект `Response`, кроме доступа к заголовкам `headers`, статусу `status` и некоторым другим полям ответа, даёт возможность прочитать его тело, в желаемом формате.

Варианты описаны в спецификации `Body`, они включают в себя:

- `response.arrayBuffer()`
- `response.blob()`
- `response.formData()`
- `response.json()`
- `response.text()`

Например, преобразуем ответ в формат `JSON`. Можете запустить этот код:

```jsx
const getUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let responseJson = await res.json();
  console.log(responseJson);
};
```

## Обработка ошибок

### Свойство `ok`

Проверить завершился ли `fetch()` ошибкой можно с помощью свойства `ok`.

```jsx
const getUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    console.log(`Что-то пошло не так, статус: ${res.status}`);
  } else {
    console.log(await res.json());
  }
};
```

### .catch()

При помощи `.catch()`

Используя `async/await`:

```jsx
const getUsers = async () => {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    console.log(await res.json());
  } catch (e) {
    console.log(e.message);
  }
};
```

Или callback chain:

```jsx
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```

Полезные ссылки:

- https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch
- https://medium.com/webbdev/fetch-3d0b811ffcb5
