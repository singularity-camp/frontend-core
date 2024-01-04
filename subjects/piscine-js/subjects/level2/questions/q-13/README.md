# flat

Создайте функцию `flat`, которая работает так же как встроенная функция `Array.flat`. Она принимает 2 параметрa - массив и глубину массива(необязательно).
Метод `flat()` создает новый массив со всеми элементами подмассива, объединенными в него рекурсивно до указанной глубины.

<pre>
<code>
<a href="https://devdocs.io/javascript/global_objects/array/flat">Ссылка</a> на документацию flat.
</code>
</pre>

```jsx
const arr1 = [0, 1, 2, [3, 4]];

console.log(flat(arr1));
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(flat(arr2, 2));
// expected output: [0, 1, 2, [3, 4]]
```

## Sample input 1:

[1]

## Sample output 1:

[1]

## Sample input 2:

[1, [2]]

## Sample output 2:

[1, 2]

## Sample input 3:

[1, [2, [3]]]

## Sample output 3:

[1, 2, [3]]

[Cледующая задача](../q-14/)
