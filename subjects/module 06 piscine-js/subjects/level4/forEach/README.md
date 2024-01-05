# forEach

Метод `arr.forEach` позволяет запускать функцию для каждого элемента массива.
Его синтаксис:

```jsx
arr.forEach(function callback(currentValue, index, array) {
    //что угодно
}[, thisArg]);
```

### Параметры:

- `callback` - Функция, которая будет вызвана для каждого элемента массива. Она принимает от одного до трёх аргументов:

  - `currentValue` - Текущий обрабатываемый элемент в массиве.
  - `index` - (_Необязательный_) Индекс текущего обрабатываемого элемента в массиве.
  - `array` (_Необязательный_) Массив, по которому осуществляется проход.

- `thisArg` - _Необязательный_ параметр. Значение, используемое в качестве this при вызове функции `callback`.

Например:

```jsx
arr = [1, 2, 3];
arr.forEach(function (item, index, array) {
  console.log(item, index, array);
});
```

Выведет:

```bash
1
2
3
```

Еще пример c помощью стрелочной функции:

```jsx
arr = [1, 2, 3];

arr.forEach((item) => console.log(item));
```

<pre>
<code>
💡 Подробнее про forEach <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach">тут</a>.
</code>
</pre>

[Следующий урок](../filter)
