# XMLHttpRequest

В этом уроке будет краткое описание XMLHttpRequest. На нем мы не будем долго останавливаться.

### XMLHttpRequest

> [`XMLHttpRequest`](https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest) это API, который предоставляет клиенту функциональность для обмена данными между клиентом и сервером. Данный API предоставляет простой способ получения данных по ссылке без перезагрузки страницы. Это позволяет обновлять только часть веб-страницы, не прерывая пользователя. XMLHttpRequest используется в AJAX запросах и особенно в single-page приложениях.

Пример:

```jsx
// 1. Создаём новый level 03 XMLHttpRequest-объект
let xhr = new XMLHttpRequest();

// 2. Настраиваем его: GET-запрос по URL /article/.../load
xhr.open("GET", "/article/xmlhttprequest/example/load");

// 3. Отсылаем запрос
xhr.send();

// 4. Этот код сработает после того, как мы получим ответ сервера
xhr.onload = function () {
  if (xhr.status != 200) {
    // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
  } else {
    // если всё прошло гладко, выводим результат
    alert(`Готово, получили ${xhr.response.length} байт`); // response -- это ответ сервера
  }
};

xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    alert(`Получено ${event.loaded} из ${event.total} байт`);
  } else {
    alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
  }
};

xhr.onerror = function () {
  alert("Запрос не удался");
};
```

Полезные ссылки:

- https://learn.javascript.ru/xmlhttprequest
- https://developer.mozilla.org/ru/docs/Web/API/XMLHttpRequest

На сегодняшний день XMLHttpRequest используется очень редко, так как на замену пришел другой, более современный метод `fetch`. О нем поговорим в следующем уроке.
