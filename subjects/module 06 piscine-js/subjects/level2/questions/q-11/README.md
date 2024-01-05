# index

Создайте 3 функции:

- `indexOf` - возвращает индекс первого вхождения значения. Она принимает в качестве аргументов:
  - массив для поиска
  - значение
  - индекс, с которого следует начать поиск(необязательный)
- `lastIndexOf` - работает так же, как и предыдущая функция, но возвращает индекс последнего вхождения значения.
- `includes` - принимает параметр value и массив. Возвращает `true`, если значение было найдено в массиве, `-1` если не найдено.

```jsx
const beasts = ["ant", "bison", "camel", "duck", "bison"];
indexOf(beasts, "bison"); // expected output: 1

const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];
lastIndexOf(animals, "Dodo"); // 3

const array1 = [1, 2, 3];
console.log(includes(array1, 2)); //true
```

<pre>
<code>
<a href="https://devdocs.io/javascript/global_objects/array/indexof">Ссылка</a> на документацию indexof.
<a href="https://devdocs.io/javascript/global_objects/array/lastindexof">Ссылка</a> на документацию lastindexof.
<a href="https://devdocs.io/javascript/global_objects/array/includes">Ссылка</a> на документацию includes.
</code>
</pre>

## indexOf

## Sample input 1:

[1, 2, 3, 4, 5, 4, 3, 2, 1], 2

## Sample output 1:

1

## Sample input 2:

["ant", "bison", "camel", "duck", "bison"], "bison"

## Sample output 2:

1

## lastIndexOf

## Sample input 1:

[1, 2, 3, 4, 5, 4, 3, 2, 1], 2

## Sample output 1:

7

## Sample input 2:

["ant", "bison", "camel", "duck", "bison"], "bison"

## Sample output 2:

4

## includes

## Sample input 1:

[1, 2, 3, 4, 5, 4, 3, 2, 1], 2

## Sample output 1:

true

## Sample input 2:

["ant", "bison", "camel", "duck", "bison"], "bison"

## Sample output 2:

true

Ответ:

```jsx

```

[Cледующая задача](../q-12/)
