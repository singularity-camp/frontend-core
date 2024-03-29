# Обработка событий

Действия, на которые может реагировать javascript, называются событиями. Обработка событий с помощью реакции очень похожа на обработку событий в элементах DOM. Ниже приведены некоторые общие события, которые вы увидите при работе с веб-сайтами, основанными на реакции:

- Щелчок по элементу (onClick)
- Отправка формы (onSubmit)
- Прокрутка страницы (onScroll)
- Наведение на элемент (onMouseOver & onMouseUp)
- Загрузка веб-страницы (onLoad)
- Изменение поля ввода (onChange)
- Пользователь нажимает клавишу (onKeyPress)
- Загрузка изображения (onLoad)

[Список Event'ов](https://reactjs.org/docs/events.html)

Обработка событий с помощью реакции очень похожа на обработку событий в DOM элементов, хотя есть некоторые синтаксические различия.

- События React записываются в camelCase.
- Функция передается как обработчик события, а не как строка.

Пример:

```jsx
<button onclick="handleClick()">Click me</button>
```

💡 Подробнее про обработку событий в [документации React](https://ru.reactjs.org/docs/handling-events.html).
