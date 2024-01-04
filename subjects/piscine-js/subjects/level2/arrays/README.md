# Массивы

Массив в JS — это объект, который хранит значения (любого типа) в ячейках, доступных по числовому индексу.
Например:

```jsx
var arr = ["hello world", 42, true];

arr[0]; // "hello world"
arr[1]; // 42
arr[2]; // true
arr.length; // 3

typeof arr; // "object"
```

В JavaScript можно объявить массив несколькими способами:

```
const arr = new Array();
const arr = []; // чаще всего используется такой вариант — он проще и красивее.
```

```
💡 Языки, которые начинают счет с нуля, как и JS, используют 0 в качестве индекса первого элемента массива.
```

```
💡 Элементы массива могут быть разного типа
```

### Изменение массивов

В JS есть специальные методы, которые изменяют массив:

- push — добавляет элемент в конец массива и возвращает новую длину массива,
- pop — удаляет последний элемент массива и возвращает его значение,
- shift — удаляет элемент из начала и сдвигает в начало остальную часть массива (второй элемент станет первым, третий — вторым и так далее),
- unshift — добавляет элемент в начало массива и возвращает новую длину массива.

```jsx
const users = ["Azamat", "Ali", "Olzhas"];

console.log(users.push("Erke")); // 4
console.log(users); // ['Azamat', 'Ali', 'Olzhas', 'Erke']

console.log(users.pop()); // 'Erke'
console.log(users); // ['Azamat', 'Ali', 'Olzhas']

console.log(users.shift()); // 'Azamat'
console.log(users); // ['Ali', 'Olzhas']

console.log(users.unshift("Azamat")); // 3
console.log(users); // ['Azamat', 'Ali', 'Olzhas']
```

### Массивы как объекты

Массив в JS — объект. К нему применимо всё, что применимо к объектам, поэтому ему можно добавить свойство.
Массивы копируются по ссылке, а не по значению. Присвоив массив другой переменной, мы получим две ссылки на одну и ту же область памяти.

<pre>
<code>
 💡 Подробнее про массивы <a href="https://developer.mozilla.org/ru/docs/Learn/JavaScript/First_steps/Arrays"> тут</a>.
</code>
</pre>

[Тест](./test-1.md)