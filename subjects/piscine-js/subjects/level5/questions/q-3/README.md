# interpolation

Исправьте функцию, чтобы она выводила:

```bash
0
1
2
3
4
5
6
7
8
9
```

Решение нужно переписать в функцию `solution()`

```jsx
const badResult = () => {
  for (var i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
};
```

<pre>
<code>
💡 Задачу можно решить с помощью <a href="https://developer.mozilla.org/ru/docs/Glossary/IIFE">IIFE</a>, let или <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Function/bind">bind</a>.
</code>
</pre>

Ответ:

```jsx
const solution = () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(function () {
      console.log(i);
    }, 10);
  }
};

//or

const solution = () => {
  for (var i = 0; i < 10; i++) {
    myTimeout(i);
  }
  function myTimeout(j) {
    setTimeout(function () {
      console.log(j);
    }, 10);
  }
};
```
