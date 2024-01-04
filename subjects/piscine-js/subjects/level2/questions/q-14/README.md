# canGetCount

Счётчик вызовов

Напишите функцию `canGetCount`. Она принимает число `N` и возвращает функцию, которая:

- первые N вызовов возвращает строку “yes”,
- каждый следующий вызов возвращает строку “no”.

```jsx
const getOne = canGetCount(2);

getOne(); // yes
getOne(); // yes
getOne(); // no

function canGetCount(n) {}
```

Ответ:

```jsx
function canGetCount(n) {
  let count = 0;
  return function check() {
    count++;
    if (count <= n) return "yes";
    return "no";
  };
}
```

[Cледующая задача](../q-15/)
