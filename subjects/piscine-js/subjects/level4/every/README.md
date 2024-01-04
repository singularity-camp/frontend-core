# every/some

### every

Метод `every()` проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.

```
💡 Метод возвращает true при любом условии для пустого массива.
```

```jsx
arr.every(
  function callback(currentValue, index, array) {
    // Возвращает элемент для new_array
  },
  [thisArg]
);
```

### Параметры:

- `callback` -Функция проверки каждого элемента. Она принимает от одного до трёх аргументов:

  - `currentValue` - Текущий обрабатываемый элемент в массиве.
  - `index` - (_Необязательный_) Индекс текущего обрабатываемого элемента в массиве.
  - `array` (_Необязательный_) Массив, по которому осуществляется проход.

- `thisArg` - _Необязательный_ параметр. Значение, используемое в качестве this при вызове функции `callback`.

### Возвращаемое значение

`true` если функция проверки возвращает truthy значение для каждого элемента массива. Иначе, `false`.

Например:

```jsx
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough); // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

Еще пример c помощью стрелочной функции:

```jsx
[12, 5, 8, 130, 44].every((elem) => elem >= 10); // false
[12, 54, 18, 130, 44].every((elem) => elem >= 10); // true
```

<pre>
<code>
💡 Подробнее про every <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/every">тут</a>.
</code>
</pre>

### some

У `some()` такой же синтаксис как и у `every()`. Различия в том, что every проходится по массиву, и возвращает `true`, если все элементы соответствуют условию. `some()` вернет `true`, если хотя бы 1 элемент удовлетворит условие.

Пример:

```jsx
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].some(isBigEnough); // true
[12, 54, 18, 130, 44].some(isBigEnough); // true
[1, 4, 8, 3, 4].some(isBigEnough); // false
```

<pre>
<code>
💡 Подробнее про some <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/some">тут</a>.
</code>
</pre>

[Следующий урок](../reduce/)
