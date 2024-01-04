# Модули в JS

До этого времени вы писали приложение с одним js файлом, таким образом не было проблем со структурой кода и его организацией.

Со временем, когда веб-приложение расширяется, возникают проблемы:

- сложно ориентироваться в коде
- повторяются фрагменты кода
- повышается вероятность совпадения имён переменных

Чтобы это исправить нужно разбить код на файлы - модули. Модуль - это часть программы, оформленная в виде отдельного файла.

### Преимущества:

- Cложную программу можно представить в виде системы простых блоков.
- Модули помогают переиспользовать код. Повторяющуюся логику можно вынести в отдельные модули.
- Модули имеют собственную область видимости. Между модулями не может быть конфликтов, поэтому ошибок в коде станет меньше.

## Что было до ES6

До выхода стандарта ES6 в JS не было модулей. Разработчикам приходилось писать "псевдомодули". Но это создавало некоторые проблемы, например:

- file1.js

```jsx
"use strict";

const TAG = "div";

const element = document.createElement(TAG);

element.textContent = "Мой первый тег";
document.body.appendChild(element);
```

- file2.js

```jsx
"use strict";

const TAG = "div";

const element = document.createElement(TAG);

element.textContent = "Мой второй тег";
document.body.appendChild(element);
```

Подключим оба файла к index.html:

```html
...
<script src="file1.js"></script>
<script src="file2.js"></script>
```

Мы ожидали увидеть страницу с 2 элементами, однако увидели ошибку:

```bash
Uncaught SyntaxError: redeclaration of const TAG
```

Дело в том, что при подключении двух файлов они оказываются в 1 области видимости. Браузер попытается исполнить второй файл и натолкнётся на повторное объявление `const TAG`. Интерпретатор выбросит исключение.

Чтобы использовать "псевдомодули" нужно быть внимательным. А если файлов будет становится все больше и больше, контролировать все переменные будет невозможно.

Решением может стать замыкание. Любые переменные внутри IIFE недоступны для внешнего мира:

```jsx
let a = 1;
var b = 2;

const result = (function () {
  let a = 3;
  console.log(a, b); // 3 2
  return a;
})();

console.log(a, b, result); // 1 2 3
```

Такой паттерн приближает псевдомодули к настоящим.

Вернемся к прошлому примеру

- file1.js

```jsx
"use strict";

(function () {
  const TAG = "div";

  const element = document.createElement(TAG);

  element.textContent = "Мой первый тег";
  document.body.appendChild(element);
})();
```

- file2.js

```jsx
"use strict";

(function () {
  const TAG = "div";

  const element = document.createElement(TAG);

  element.textContent = "Мой второй тег";
  document.body.appendChild(element);
})();
```

- index.html

```html
...
<script src="file1.js"></script>
<script src="file2.js"></script>
```

Откроем браузер:

<img src="./img1.png" width="100%">

Все работает!

IFE изолирует переменные, но зачастую разработчики хотят иметь доступ к функциям модуля из других модулей.

Так можно извне получить доступ к содержимому IIFE:

- file1.js

```jsx
window.utils = (function () {
  function mySuperFunc1() {
    console.log("utils.mySuperFunc1");
  }

  function mySuperFunc2() {
    console.log("utils.mySuperFunc2");
  }

  return {
    mySuperFunc1,
    mySuperFunc2,
  };
})();
```

- file2.js

```jsx
(function () {
  // Здесь какая-то суперреализация функций, которые хочется переиспользовать много где в проекте

  function myOtherSuperFunc1() {
    window.utils.mySuperFunc1(); // Вызывали из file1.js
    console.log("otherUtils.myOtherSuperFunc1");
  }

  function myOtherSuperFunc2() {
    console.log("otherUtils.myOtherSuperFunc2");
  }

  myOtherSuperFunc1();

  window.otherUtils = {
    myOtherSuperFunc1,
    myOtherSuperFunc2,
  };
})();
```

- index.html

```html
<script src="file1.js"></script>
<script src="file2.js">
    // Сначала покажутся логи при вызове myOtherSuperFunc1 из file2.js:
    // utils.mySuperFunc1
  // otherUtils.myOtherSuperFunc1
</script>

<script>
  // Из файла file1.js
  window.utils.mySuperFunc1(); // utils.mySuperFunc1
  window.utils.mySuperFunc2(); // utils.mySuperFunc2

  // Из файла file2.js
  window.otherUtils.myOtherSuperFunc1(); // utils.mySuperFunc1
  // otherUtils.myOtherSuperFunc1
  window.otherUtils.myOtherSuperFunc2(); // otherUtils.myOtherSuperFunc2
</script>
```

### Итого

До появления ES6 можно было писать свои псевдомодули. Однако, это сопровождалось неудобствами и рисками ошибок.
