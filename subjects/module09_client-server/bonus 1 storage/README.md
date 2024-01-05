# Хранилище

## Cookie

`cookie` — это информация, которая сохраняется между серверной и клиентской сторонами. Веб-браузер сохраняет эту информацию во время просмотра.

`cookie` содержит информацию в виде строки, обычно в виде пары «имя-значение», разделенной точкой с запятой. Он поддерживает состояние пользователя и запоминает информацию о пользователе между веб-страницами.

### Как работают файлы cookie?

- Когда пользователь отправляет запрос на сервер, каждый такой запрос рассматривается как новый запрос, отправленный разными пользователями.
- Чтобы распознать пользователя, нам нужно добавить куки с ответом от сервера.
- Теперь всякий раз, когда пользователь отправляет запрос на сервер, `cookie` автоматически добавляется вместе с этим запросом. Благодаря куки сервер распознает пользователей.

### Как создать куки в JavaScript?

В JavaScript мы можем создавать, читать, обновлять и удалять файлы `cookie`, используя свойство `document.cookie`.

Для создания `cookie` используется следующий синтаксис:

```jsx
document.cookie = "имя=значение";
```

## localStorage и sessionStorage

Объекты `localStorage` и `sessionStorage` являются частями API веб-хранилища, — это два инструмента для локального сохранения пар «ключ-значение». Использование `localStorage` и `sessionStorage` для хранения является альтернативой использованию файлов `cookie` и имеет некоторые преимущества:

- Данные сохраняются только локально и не могут быть прочитаны сервером, что устраняет проблему безопасности, связанную с файлами cookie.
- Это позволяет сохранить гораздо больше данных (10 МБ для большинства браузеров).
- Простой синтаксис

Он также поддерживается во всех современных браузерах, так что вы можете без проблем использовать его сегодня. Файлы `cookie` по-прежнему полезны, особенно когда речь идет об аутентификации, но бывают случаи, когда использование `localStorage` или `sessionStorage` может быть лучшей альтернативой.

### Разница

`localStorage` и `sessionStorage` почти идентичны и имеют одинаковый API. Разница в том, что в `sessionStorage` данные сохраняются только до закрытия окна или вкладки. С `localStorage` данные сохраняются до тех пор, пока пользователь вручную не очистит кеш браузера или пока ваше веб-приложение не очистит данные.

### Создание, чтение и обновление записей

`localStorage` и `sessionStorage` имеют одинаковые методы.

### Создание

```jsx
let key = "Item 1";
localStorage.setItem(key, "Value");
```

### Чтение

```jsx
let myItem = localStorage.getItem(key);
```

### Обновление

```jsx
localStorage.setItem(key, "New Value");
```

### Удаление

```jsx
localStorage.removeItem(key);
```

или удалить все:

```jsx
localStorage.clear();
```

- https://developer.mozilla.org/ru/docs/Web/API/Storage
- https://learn.javascript.ru/localstorage