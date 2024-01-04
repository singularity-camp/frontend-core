# Деструктуризация

Синтаксис деструктурирующего присваивания в выражениях JavaScript позволяет извлекать данные из массивов или объектов при помощи синтаксиса, подобного объявлению массива или литералов в объекте.

### Синтаксис

```jsx
var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({ a, b } = { a: 1, b: 2 });
console.log(a); // 1
console.log(b); // 2

({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });
// ES2016 - ещё не реализовано Firefox 47a01
```

Читаем внимательно:

<pre>
<code>
💡 Про деструктуризацию <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment">тут</a>.
</code>
</pre>

[Тест](./test-1.md)
