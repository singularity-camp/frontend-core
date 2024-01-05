# Fizz - Buzz

Реализуйте функцию, которая делает следующее:

- Принимает число `n` от 1 до 100 и записывает в строку что-то для каждого числа из промежутка от 1 до `n`:
  - Если число делится на 3 без остатка, запишите `Fizz`
  - Если число делится на 5 без остатка, запишите `Buzz`
  - Если число делится и на 3 и на 5 без остатка, запишите `FizzBuzz`
  - Если число не соответствует ни одному из вышеперечисленных условий, просто запишите число

Например ответ для `n = 10`:

```jsx
let str = fizzBuzz(10); //1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz
```

#### ## Sample input 1:

```bash
1
```

#### ## Sample output 1:

```bash
1
```

#### ## Sample input 2:

```bash
0
```

#### ## Sample output 2:

```bash

```

#### ## Sample input 3:

```bash
8
```

#### ## Sample output 3:

```bash
1 2 Fizz 4 Buzz Fizz 7 8
```

Ответ:

```jsx
function fizzBuzz(n) {
  let i = 0;
  let str = "";
  while (++i <= n) {
    if (i != n) {
      if (i % 15 == 0) str += "FizzBuzz ";
      else if (i % 3 == 0) str += "Fizz ";
      else if (i % 5 == 0) str += "Buzz ";
      else str += i + " ";
    } else {
      if (i % 15 == 0) str += "FizzBuzz";
      else if (i % 3 == 0) str += "Fizz";
      else if (i % 5 == 0) str += "Buzz";
      else str += i + "";
    }
  }
  return str;
}
```

[Cледующий урок](../../../level2/)
