# Regex

Регулярные выражения позволяют делать эффективную валидацию, обработку и анализ данных. Они также играют важную роль в поиске и парсинге нужной информации.

Например, возьмем текст:

> Lorem ipsum dolor sit amet, consectetur adipiscing elit `jusan.kz,` sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat `jusan.kz`. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Нужно получить только сочетание букв `jusan.kz`. Как это сделать?

- Считывать в цикле каждую букву и проверять на соответствие или
- Использовать регулярные выражения

## Создание регулярного выражения

Есть два способа создать регулярное выражение в Javascript. Его можно создать с помощью конструктора `RegExp` или с помощью слэша(`/`).

### `RegExp`:

Синтаксис: `new RegExp(pattern[, flags])`

Пример:

```jsx
var regexConst = new RegExp("abc");
```

### Литералы регулярного выражения:

Синтаксис: `/pattern/flags`

Пример:

```jsx
var regexLiteral = /abc/;
```

## Методы RegExp

### RegExp.prototype.test()

Этот метод используется для проверки того, было ли найдено совпадение. Он принимает строку, которую мы должны проверить на соответствие регулярному выражению, и возвращает `true` или `false` в зависимости от того, найдено совпадение или нет.

Пример:

```jsx
var regex = /hello/;
var str = "hello world";
var result = regex.test(str);
console.log(result); // returns true
```

### RegExp.prototype.exec()

Этот метод возвращает массив, содержащий все совпадающие группы. Он принимает строку, которую мы должны проверить на соответствие регулярному выражению.

Пример:

```jsx
var regex = /hello/;
var str = "hello world";
var result = regex.exec(str);
console.log(result);
// returns [ 'hello', index: 0, input: 'hello world', groups: undefined ]// 'hello' -> is the matched pattern.
// index: -> Is where the regular expression starts.
// input: -> Is the actual string passed.
```

## Простой паттерн

Шаблон, который просто сопоставляет текст с тестовой строкой. Например:

```jsx
var regex = /hello/;
console.log(regex.test("hello world")); // true
```

## Специальные символы

В регулярных выражениях существуют специальные символы, которые помогают создавать более сложные паттернов.

### Флаги

- `g` — глобальный поиск – не останавливать поиск после первого совпадения
- `i` — поиск без учета регистра
- `m` — multiline. Делает граничные символы `^` и `$` совпадающими с началом и концом каждой отдельной строки, а не с началом и концом всей строки.
- `s` — символ "." является подстановочным знаком, который также соответствует знаку новой линии.
- `u` — unicode. Заставляет выражение принимать отдельные символы как кодовые точки, а не кодовые единицы, и, таким образом, также соответствует 32-битным символам.
- `y` — заставляет выражение начать поиск с индекса, указанного в свойстве lastIndex.

### Группы символов

Набор символов `[xyz]` — это способ сопоставления разных символов в одной позиции. Он находит любой отдельный символ в строке из символов, находящихся внутри скобок. Например:

```jsx
var regex = /[bt]ear/;
console.log(regex.test("tear"));
// returns true
console.log(regex.test("bear"));
// return true
console.log(regex.test("fear"));
// return false
```

- `.` все символы кроме `newline`
- `\w\d\s` слова, число, пробел
- `\W\D\S` НЕ слово, число, пробел
- `[abc]` a, b или с
- `[^abc]` НЕ a, b, или c
- `[a-g]` символ между a и g

### Meta-characters

- `\d` — сопоставляется любому цифровому символу (аналогично [0-9]).
- `\w` — сопоставляется любому символу слова. Символ слова — это любая буква, цифра и знак подчеркивания. (То же, что и [a-zA-Z0–9_] ), то есть буквенно-цифровой символ.
- `\s` — сопоставляется символу пробела (пробелы, табуляции и т. д.).
- `\t` — сопоставляется только символу табуляции.
- `\b` — Найти совпадение в начале или конце слова. Также известен как граница слов.
- `.` (точка) Сопоставляется любому символу, кроме новой строки.
- `\D` — сопоставляется любому нецифровому символу (аналогично [^0–9]).
- `\W` — сопоставляется любому символу, не являющемуся словом (то же, что и [^a-za-z0–9_]).
- `\S` — сопоставляется непробельному символу.

Более подробный список символов:

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
- https://github.com/ziishaned/learn-regex

Один из ресурсов, где можно проверить правильность регулярного выражения:

- https://regex101.com/
