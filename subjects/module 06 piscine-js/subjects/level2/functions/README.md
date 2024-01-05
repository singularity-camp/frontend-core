# Функции

В этом уроке мы рассмотрим простой пример вызова и декларации функций.
Еще один подтип `object`, которым вы будете пользоваться во всех ваших JS программах — это функция.

## Объявление функций

```jsx
function greet(name) {
  return `Hello ${name}`;
}

greet("Azamat"); // Hello Azamat
goodbye("Azamat"); // Goodbye Azamat

function goodbye(name) {
  return `Goodbye ${name}`;
}
```

Обычное объявление. Такую функцию можно вызвать до объявления — благодаря эффекту всплытия.

<pre>
<code>
 💡 Про <a href="https://medium.com/@stasonmars/%D1%80%D0%B0%D0%B7%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC%D1%81%D1%8F-%D1%81-%D0%BF%D0%BE%D0%B4%D0%BD%D1%8F%D1%82%D0%B8%D0%B5%D0%BC-hoisting-%D0%B2-javascript-7d2d27bc51f1">всплытие(hoisting).</a>
</code>
</pre>

### Вложенные функции

В JS есть возможность вложить функцию в другую функцию. Это может быть полезно, когда мы уверены, что функция будет использована только одной другой функцией.

Рассмотрим на примере без вложения:

```jsx
function square(num) {
  return num * num;
}

function squareSum(num1, num2) {
  return square(num1) + square(num2);
}
squareSum(2, 3); // 13
```

Тоже самое с помощью вложенности:

```jsx
function squareSum(num1, num2) {
  function square(num) {
    return num * num;
  }

  return square(num1) + square(num2);
}

square(3); // 🛑 Error, square недоступна снаружи
squareSum(2, 3); // 13
```

<pre>
<code>
 💡 Подробнее про функции и область видимости <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D0%B8%D0%B8_%D0%B2_javascript">тут.</a>
</code>
</pre>

[Тест](./test-1.md)
