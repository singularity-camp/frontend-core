# Power

Вернуть число a в степени b не используя `Math.pow`.

#### ## Sample input 1:

```bash
1, 0
```

#### ## Sample output 1:

```bash
1
```

#### ## Sample input 2:

```bash
0, 1
```

#### ## Sample output 2:

```bash
0
```

#### ## Sample input 3:

```bash
2, 5
```

#### ## Sample output 3:

```bash
32
```

#### Sample input 4:

```bash
2, 8
```

#### Sample output 4:

```bash
256
```

Ответ:

```jsx
function pow(a, b) {
  var res = 1;
  for (var i = 0; i < b; i++) {
    res = res * a;
  }
  return res;
}
```

[Cледующая задача](../q-11/)
