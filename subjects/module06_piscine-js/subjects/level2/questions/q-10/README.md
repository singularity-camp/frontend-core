# converter

Напишите функции для конвертирования одного типа в другой:

- `arrToSet` из Array в Set
- `setToArr` из Set в Array

<pre>
<code>
<a href="https://devdocs.io/javascript/global_objects/set">Ссылка</a> на документацию set.
</code>
</pre>

## setToArr

## Sample input 1:

new Set([1, 2, 3])

## Sample output 1:

[1, 2, 3]

## arrToSet

## Sample input 1:

[1, 2, 3, 3, 3]

## Sample output 1:

[1, 2, 3]

Ответ:

```jsx
function arrToSet(arr) {
  return new Set(arr);
}
function setToArr(set) {
  return Array.from(set);
}
```

[Cледующая задача](../q-11/)
