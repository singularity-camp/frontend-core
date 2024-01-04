# LikeButton

В этом уроке вам надо будет выполнить небольшое задание:

Посмотрите на [пример кода](https://gist.github.com/gaearon/6668a1f6986742109c00a581ce704605) из официальной документации react:

`index.html`:

```html
<!DOCTYPE html>
<html>
  <!-- ... -->
    <div id="like_button_container"></div>
    <script src="like_button.js"></script>
  </body>
</html>
```

`like_button.js`:

```jsx
"use strict";

const e = React.createElement;

class LikeButton extends React.Component {
  // ...
}

const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(e(LikeButton), domContainer);
```

Ваша задача изменить логику поведения компонента `LikeButton`:

### Задание

#### 1. Пройти по ссылке задания в GitHub Classroom

Задание выполняется в GitHub Classroom. После выполнения пришлите свою ссылку на рецензию ревьюеру в Stepik ([ССЫЛКА GITHUB CLASSROOM])

#### 2.Добавьте README.md cо следующими данными:

- описание проекта
- инструкцией запуска
- cсылка на домен, где хостится проект (netlify)

#### 3. Добавьте на страницу еще одну кнопку

#### 4. Кнопки должны работать как переключатель: при нажатии на кнопку текст кнопки должен меняться на "👎", при повторном нажатии меняйте текст на "👍"

#### 5. Текст 1 кнопки должен быть изначалально "👍", у второй "👎", сделайте это, передавая пропсы в компонент.

#### 6. В консоли браузера не должно быть warning-ов и ошибок.

#### 7. Настройте netlify:

Настройте автодеплой
