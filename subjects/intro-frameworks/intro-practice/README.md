# Пишем первое react - приложение

В предыдущих уроках было много теоретического материала. В этом уроке разберем как написать первое приложение используя React, а также выполним небольшое задание.

### Начало работы

Как мы уже упоминали, [`react`](https://ru.reactjs.org/docs/getting-started.html) — это JavaScript-библиотека для разработки пользовательского интерфейса.

> React изначально был спроектирован так, чтобы его можно было внедрять постепенно. Другими словами, вы можете начать с малого и использовать только ту функциональность React, которая необходима вам в данный момент.

### Добавляем React на сайт

1. Создайте `index.html` файл

2. Добавьте `div` с уникальным `id`:

```html
<!-- ... остальной HTML ... -->
<div id="root"></div>
<!-- ... остальной HTML ... -->
```

3. Добавьте в script-теги библиотеки `react` и `reactDOM`:

```html
  <!-- ... остальной HTML ... -->

  <!-- Загрузим React. -->
  <!-- Примечание: при деплое на продакшен замените «development.js» на «production.min.js». -->
  <script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

<script src="app.js"></script>
</body>
```

4. Создайте файл `app.js`:

```jsx
let element = React.createElement("h1", null, "Hello, world!");
ReactDOM.render(element, document.getElementById("root"));
```

`ReactDOM.createElement()` принимает 3 аргумента: тип элемента, пропсы (свойства) и список дочерних компонентов.  
`ReactDOM.render()` принимает 2 аргумента: react-элемент и корневой DOM-узлел.  
На странице будет написано «Hello, world».

**Готово!**  
Вы только что отрендерили страницу с помощью библиотеки react без использования JSX. ✅

В этой статье вы можете посмотреть другой пример работы с react:

- https://ru.reactjs.org/docs/add-react-to-a-website.html
