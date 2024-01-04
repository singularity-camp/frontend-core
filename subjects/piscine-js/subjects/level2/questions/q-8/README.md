# isEqual

Напишите функцию, которая сравнивает два массива и возвращает true если они идентичны (элементам массива 1 соответствуют элементы массива 2).

```jsx
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
const arr3 = [1, 2, 3, 5];
const arr4 = [1, 2, 3, 4, 5];
console.log(isEqual(arr1, arr2)); // true
console.log(isEqual(arr1, arr3)); // false
console.log(isEqual(arr1, arr4)); // false
```

## Sample input 1:

[1, 2, 3, 4],
[1, 2, 3, 4]

## Sample output 1:

true

## Sample input 2:

[1, 2, 3, 4],
[1, 2, 3, 5]

## Sample output 2:

false

Ответ:

```jsx
const isEqual = (firstArray, secondArray) => {
  if (firstArray.length !== secondArray.length) {
    return false;
  }

  const compared = firstArray.map((el, id) => secondArray[id] === el);

  return !compared.includes(false);
};
```

[Cледующая задача](../q-9/)
