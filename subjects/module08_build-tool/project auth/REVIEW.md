## Рецензия

Рецензия - это проверка проекта другого учащегося. Перед тем, как приступить к рецензированию, ознакомьтесь с правилами проведения рецензии.

**Правила рецензии:**

- Проверять только выполненную работу.
- Следовать указаниям критериев оценки.
- Если проект учащегося соответствует критерию, то ставьте 1.
- Если проект учащегося не соответствует критерию, то ставьте 0.

#### Критерий оценки #1

GitHub ссылка рабочая и ведет на репозиторий с названием `jusan-auth-task`.

Если это не так, то ставьте оценку 0 и заканчивайте проверку.

#### Критерий оценки #2

Ветка `master` содержит только `README.md` с названием проекта.

#### Критерий оценки #3

Весь код лежит на ветке `task-1`.

#### Критерий оценки #4

На ветке `task-1` есть `README.md`, который содержит:

- описание проекта
- инструкцией запуска
- cсылка на домен, где хостится проект (netlify)

#### Критерий оценки #5

Запустите код по инструкции из `README.md` - код запускается без ошибок.

#### Критерий оценки #6

Страница авторизации:

- При нажатии на кнопку в консоль выводится объект с собранными даннами из формами

#### Критерий оценки #7

Страница регистрации:

- При нажатии на кнопку в консоль выводится объект с собранными даннами из формами

#### Критерий оценки #8

На события `focus/blur`, a также на событие `submit` стоит проверка:

Проверки:

- `Имя/Фамилия` - латиница или кириллица, не должно быть пробелов и цифр. Из спецсимволов допускается только дефис.
- `Логин` — от 3 до 15 символов, только латиница. Без пробелов, без спецсимволов, кроме нижнего подчеркивания и дефиса. Может содержать числа, но не полностью состоять из них.
- `email` — стандартная проверка: латиница, может содержать спецсимволы и цифры, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.
- `Пароль` — от 8 до 30 символов, обязательно хотя бы один спецсимвол и цифра.
- `Телефон` — от 8 до 15 символов, состоит из цифр, может начинается с плюса.

#### Критерий оценки #9

Есть страницы 404 и 50\*

#### Критерий оценки #10

Проект собирается с помощью parcel.

#### Критерий оценки #11

Проект проходит все проверки линтеров

#### Критерий оценки #12

Проект хостится на netlify, настроен автодеплой

#### Критерий оценки #13
Имена функций и переменных соответствуют Best Practices

#### Критерий оценки #14
Студент смог объяснить свой код и ответить на вопросы ревьюера
