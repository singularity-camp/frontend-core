# Условный рендеринг

В React вы можете условно визуализировать компоненты.

Есть несколько способов сделать это:

### `if`

Мы можем использовать оператор if JavaScript, чтобы решить, какой компонент отображать.

```jsx
function MissedGoal() {
  return <h1>MISSED!</h1>;
}

function MadeGoal() {
  return <h1>Goal!</h1>;
}
```

### Логический оператор `&&`

Пример:

```jsx
function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}

const cars = ["Ford", "BMW", "Audi"];
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Garage cars={cars} />);
```

### Тернарный оператор

```jsx
condition ? true : false;
```

Пример:

```jsx
function Goal(props) {
  const isGoal = props.isGoal;
  return <>{isGoal ? <MadeGoal /> : <MissedGoal />}</>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={false} />);
```

💡 Подробнее про Условный рендеринг в [документации React](https://ru.reactjs.org/docs/conditional-rendering.html).
