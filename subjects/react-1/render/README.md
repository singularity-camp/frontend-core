# Рендеринг элементов

Основная цель react является рендеринг HTML в веб-странице.
React рендерит HTML страницу, используя функцию `ReactDOM.render()`.

### `ReactDOM.render()`

Функция `ReactDOM.render()` принимает два аргумента: `код HTML` и `элемент HTML`.

Цель функции — отобразить указанный код HTML внутри указанного элемента HTML.

Пример:

Отобразим тэг `<p>` внутри элемента с id `root`:

```jsx
ReactDOM.render(<p>Hello</p>, document.getElementById("root"));
```

`index.html`:

```html
<body>
  <div id="root"></div>
</body>
```

### React обновляет только то, что необходимо

React DOM сравнивает элемент и его дочернее дерево с предыдущей версией и вносит в DOM только минимально необходимые изменения.

💡 Подробнее про Рендеринг элементов в [документации React](https://ru.reactjs.org/docs/rendering-elements.html).
