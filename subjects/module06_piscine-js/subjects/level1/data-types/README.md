# Типы данных

В этом уроке вы узнаете какие типы данных существуют в JS и как использовать оператор typeof.

В JS всего существует 8 типов данных:

**Примитивные типы данных:**

- логический (`Boolean`),
- числа (`Number`),
- большие числа (`BigInt`),
- строки (`String`),
- символы (`Symbol`),
- `undefined`,
- `null`.

**Непримитивный тип:**

- объект (`Object`).

Объекты мы разберем в другом уроке.

Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:

```jsx
// Не будет ошибкой
let message = "hello";
message = 123456;
```

Языки программирования, в которых такое возможно, называются «динамически типизированными». Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.

### Оператор typeof

Оператор `typeof`возвращает тип аргумента. Это полезно, когда мы хотим обрабатывать
значения различных типов по-разному или просто хотим сделать проверку.

У него есть две синтаксические формы:

1. Синтаксис оператора: `typeof x`.
2. Синтаксис функции: `typeof(x)`.

Другими словами, он работает со скобками или без скобок. Результат одинаковый.

Вызов `typeof x` возвращает строку с именем типа:

```jsx
typeof undefined; // "undefined"
typeof 0; // "number"
typeof 10n; // "bigint"
typeof true; // "boolean"
typeof "foo"; // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"
typeof null; // "object"
typeof alert; // "function"
```

<pre>
💡 <code>typeof null</code> — результат данной операции является официально признанной ошибкой языка, поскольку это не объект, <br>а отдельный тип данных. Исправить ошибку уже нельзя, поскольку так можно «сломать» интернет.
</pre>

<pre>
<code>
💡 <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/NaN">NaN(not a number) </a> означает вычислительную ошибку.
</code>
</pre>

[Teст](./test-1.md)
