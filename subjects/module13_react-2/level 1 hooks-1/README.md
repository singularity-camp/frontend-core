# Хуки

Перед началом данного модуля рекомендовано прочитать документацию:

- [Введение в хуки](https://ru.reactjs.org/docs/hooks-intro.html)
- [Краткий обзор хуков](https://ru.reactjs.org/docs/hooks-overview.html)

Кратко расскажем об основных хуках и примерах:

## `useState()`

Хук React useState позволяет нам отслеживать состояние функционального компонента.

Состояние - данные или свойства, которые необходимо отслеживать в приложении.

Пример:

```jsx
import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}
```

В квадратных скобках мы деструктурируем возвращаемые значения из `useState`.
Первое значение, `color`, является текущим состоянием.
Второе значение, `setColor`, — это функция, которая используется для обновления состояния.

```bash
💡 Эти имена являются переменными, которым можно присвоить любое имя.
```

Наконец, мы устанавливаем начальное состояние как пустую строку: `useState("")`

### Чтение

Теперь можно включить наше состояние в любом месте нашего компонента.

```jsx
import { useState } from "react";
import ReactDOM from "react-level4_dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FavoriteColor />);
```

## `useEffect()`

Хук `useEffect` позволяет выполнять побочные эффекты в ваших компонентах.

Некоторые примеры побочных эффектов: выборка данных, непосредственное обновление DOM и таймеры.

`useEffect` принимает два аргумента. Второй аргумент является необязательным.

`useEffect(<функция>, <зависимость>)`

Пример:

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-level4_dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Timer />);
```

Тут мы используем `setTimeout()` для подсчета 1 секунды после первоначального рендеринга.

`useEffect` запускается при каждом рендеринге. Это означает, что при изменении счетчика происходит рендеринг, который запускает другой эффект.

Это не то, чего мы хотим. Есть несколько способов контролировать запуск побочных эффектов.

Мы всегда должны включать второй параметр, который принимает массив. При желании мы можем передать зависимости в useEffect в этом массиве.

```jsx
useEffect(() => {
  //будет срабатывать каждый рендер
});
```

```jsx
useEffect(() => {
  //Сработает только на первый рендер
}, []);
```

```jsx
useEffect(() => {
  //Сработает на первый рендер
  //и каждый раз при изменении prop и level 04 state
}, [prop, state]);
```

Вот пример хука useEffect, который зависит от переменной. Если переменная count обновится, эффект запустится снова:

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-level4_dom/client";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- добавили зависимость от count

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Counter />);
```

Если существует несколько зависимостей, их следует включить в массив зависимостей `useEffect`.

Прочитайте больше:

- [Использование хука состояния](https://ru.reactjs.org/docs/hooks-state.html)
- [Использование хука эффекта](https://ru.reactjs.org/docs/hooks-effect.html)
- [Правила хуков](https://ru.reactjs.org/docs/hooks-rules.html)
