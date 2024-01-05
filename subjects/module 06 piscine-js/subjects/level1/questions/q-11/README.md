# Pattern

Напишите функцию `printPattern()`, которая принимает в качестве параметра число и возвращает строку со следующим паттерном:

```jsx
printPattern(8);

// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *

printPattern(2);
// *
// * *
```

#### ## Sample input 1:

```bash
1
```

#### ## Sample output 1:

```bash
*
```

#### ## Sample input 2:

```bash
2
```

#### ## Sample output 2:

```bash
*\n* *
```

Если число отрицательное, необходимо вывести на экран сообщение об ошибке - `Error, number is negative`.

Ответ:

```jsx
function printPattern(range) {
  var str = "";
  for (var i = 1; i <= range; i++) {
    for (var j = 1; j <= i; j++) {
      if (j === i) str += "*";
      else str += "* ";
    }
    if (i !== range) str += "\n";
  }
  return str;
}
```

[Cледующая задача](../q-12/)
