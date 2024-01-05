# compact

Напишите функцию, которая очищает массив от ненужных элементов таких как false, undefined, пустая строка, 0, null

Пример:

```jsx
const data = [0, 1, false, 2, undefined, "", 3, null];
console.log(compact(data)); // [1, 2, 3]
```

## Sample input 1:

[0, 1, false, 2, undefined, "", 3, null]

## Sample output 1:

[1, 2, 3]

## Sample input 2:

[""]

## Sample output 2:

[]

## Sample input 3:

[0, 1, false, 2, undefined, "", 3, null, false]

## Sample output 3:

[1, 2, 3]

Ответ:

```jsx
const compact = (array) => array.filter((el) => el);
```

[Cледующая задача](../q-7/)
