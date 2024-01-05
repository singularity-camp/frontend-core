# map

Метод `map()` создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.

```jsx
const newArr = arr.map(
  function callback(currentValue, index, array) {
    // Возвращает элемент для new_array
  },
  [thisArg]
);
```

### Параметры:

- `callback` - Функция, вызываемая для каждого элемента массива arr. Каждый раз, когда callback выполняется, возвращаемое значение добавляется в new_array. Она принимает от одного до трёх аргументов:

  - `currentValue` - Текущий обрабатываемый элемент в массиве.
  - `index` - (_Необязательный_) Индекс текущего обрабатываемого элемента в массиве.
  - `array` (_Необязательный_) Массив, по которому осуществляется проход.

- `thisArg` - _Необязательный_ параметр. Значение, используемое в качестве this при вызове функции `callback`.

### Возвращаемое значение

Новый массив, где каждый элемент является результатом `callback` функции.

Например:

```jsx
const numbers = [1, 4, 9];
const roots = numbers.map(function (item) {
  return Math.sqrt(item); // не забывайте про return,  возвращаемое значение добавляется в roots
});
console.log(roots);
```

Выведет:

```bash
[ 1, 2, 3 ]
```

Еще пример c помощью стрелочной функции:

```jsx
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt); // [1, 2, 3]
```

<pre>
<code>
💡 Подробнее про map <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map">тут</a>.
</code>
</pre>

[Следующий урок](../every/)
