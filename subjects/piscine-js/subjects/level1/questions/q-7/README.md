# Last and first

Создайте 2 функции:

- функция `first`, которая принимает строку и возвращает первый элемент.
- функция `last`, которая принимает строку и возвращает последний элемент.

Если строка пустая - вернуть ее.

## first

#### ## Sample input 1:

```bash
Almaty
```

#### ## Sample output 1:

```bash
A
```

## last

#### ## Sample input 1:

```bash
Almaty
```

#### ## Sample output 1:

```bash
y
```

Ответ:

```jsx
function last(str) {
  if (!str) return str;
  return str[str.length - 1];
}

function first(str) {
  if (!str) return str;
  return str[0];
}
```

[Cледующая задача](../q-8)
