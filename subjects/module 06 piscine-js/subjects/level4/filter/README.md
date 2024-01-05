### filter

Метод `filter()` **создаёт новый массив со всеми элементами**, прошедшими проверку, задаваемую в передаваемой функции.

Его синтаксис:

```jsx
arr.filter(function callback(currentValue, index, array) {
    //что угодно
}[, thisArg]);
```

### Параметры:

- `callback` - Функция-предикат, которая будет вызвана для проверки каждого элемента массива. Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется. Она принимает от одного до трёх аргументов:

  - `currentValue` - Текущий обрабатываемый элемент в массиве.
  - `index` - (_Необязательный_) Индекс текущего обрабатываемого элемента в массиве.
  - `array` (_Необязательный_) Массив, по которому осуществляется проход.

- `thisArg` - _Необязательный_ параметр. Значение, используемое в качестве this при вызове функции `callback`.

### Возвращаемое значение

Вернётся новый массив с элементами, которые прошли проверку. Если ни один элемент не прошёл проверку, то будет возвращён пустой массив.

Например:

```jsx
let arr = [1, -1, 2, -2, 3];
let positiveArr = arr.filter(function (number) {
  return number > 0; // не забывайте про return,  возвращаемое значение добавляется в positiveArr
});
console.log(positiveArr);
```

Выведет:

```bash
[ 1, 2, 3 ]
```

Еще пример c помощью стрелочной функции:

```jsx
let arr = [1, -1, 2, -2, 3];

let positiveArr = arr.filter((elem) => elem > 0);

console.log(positiveArr); // [ 1, 2, 3 ]
```

<pre>
<code>
💡 Подробнее про filter <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">тут</a>.
</code>
</pre>

[Следующий урок](../map/)