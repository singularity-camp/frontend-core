## Рецензия

Рецензия - это проверка проекта другого учащегося. Перед тем, как приступить к рецензированию, ознакомьтесь с правилами проведения рецензии.

**Правила рецензии:**

- Проверять только выполненную работу.
- Следовать указаниям критериев оценки.
- Если проект учащегося соответствует критерию, то ставьте 1.
- Если проект учащегося не соответствует критерию, то ставьте 0.

#### Критерий оценки #1

GitHub ссылка рабочая и ведет на репозиторий с выполненным заданием.

Если это не так, то ставьте оценку 0 и заканчивайте проверку.

#### Критерий оценки #2

В репозиторий добавлен файл README.md, который содержит информацию о проекте.

#### Критерий оценки #3

Откройте index.html в браузере, браузер не должен показывать ошибок.

#### Критерий оценки #4

Структура файлов соответствует:

```bash
- src
    - index.level 2 html
    - js
        - app.js
    - style
        - style.level 4 css
```

#### Критерий оценки #5

В странице index.html должно быть как минимум:

- `<input>` для записи задач в список
- `<button>` для добавления новой задачи в список
- список задач, который пополняется с помощью JS

#### Критерий оценки #6

Проект имеет style.css файл со стилями

#### Критерий оценки #7

Есть структура для хранения списка

Пример:

```jsx
let todo = { content: "Купить хлеб", date: new Date() };

let todos = [todo];
```

#### Критерий оценки #8

- При нажатии на кнопку "Добавить" - текст появляется в списке дел
- После нажатия на кнопку "Добавить" `input` обнуляется пустой строкой `input.value = ""`
- Если `<input>` пустой - свойство кнопки "Добавить" должно быть `disabled`.
- Цвет фона кнопки меняется в зависимости от наличия текста в `input`.
- Нажатие на клавишу `enter` отрабатывает также как кнопка "Добавить"

#### Критерий оценки #9

- Есть возможнось удалить элемент из списка todo
- Есть возможнось удалить элемент из списка done

#### Критерий оценки #10

- Если список пустой - показано сообщение `Список еще пуст`
- Каждый элемент в списке содержит :
  - текст дела
  - дату создания в формате `3 Jan 2022 16:30`
  - checkbox
  - кнопку удалить
  - кнопку редактировать

#### Критерий оценки #11

- При нажатии на checkbox списка todo - он перестает отображаться в todo и переходит в done

#### Критерий оценки #12

- Через 10 секунд после создания дела на экране виден alert c текстом дела.

#### Критерий оценки #13

- Можно редактировать дела в списке todo.

#### Критерий оценки #14

- Имена функций и переменных соответствуют Best Practices

#### Критерий оценки #15

- Студент смог объяснить свой код и ответить на вопросы ревьюера
