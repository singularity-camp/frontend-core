# Списки и ключи

В React можно отображать списки используя цикл.

Пример:

```jsx
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car brand={car} />
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
```

### Ключи

Ключи позволяют React отслеживать элементы. Таким образом, если элемент обновляется или удаляется, будет повторно отображаться только этот элемент, а не весь список.

Ключи должны быть уникальными.
Пример:

```jsx
function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage />);
```

💡 Подробнее про cписки и ключи в [документации React](https://ru.reactjs.org/docs/lists-and-keys.html).
