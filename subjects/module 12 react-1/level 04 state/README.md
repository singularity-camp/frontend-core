# Cостояние и жизненный цикл

### Что такое состояние

Состояние используется компонентами React, чтобы сделать их динамическими. Это позволяет компоненту отслеживать изменение информации. Более конкретно, состояние компонента — это объект, который содержит информацию, которая может меняться в течение срока жизни компонента.

### Состояние vs пропсы

- Пропсы неизменны. Их нельзя изменять
- Состояние наблюдаемое. Оно может хранить данные, которые могут меняться со временем.
- Пропсы могут использоваться как в функциях, так и в компонентах класса.
- Состояние ограничено компонентом
- Пропсы устанавливаются родительским компонентом
- Состояние обновляется обработчиками событий

### Использование состояния

При использовании состояния нужно, чтобы состояние компонента всегда существовало, поэтому сначала установим начальное состояние. Мы можем сделать это, определив состояние в конструкторе класса компонента, например так:

```jsx
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 1 };
  }
  render() {
    return (
      <div>
        <p>{this.state.value}</p>
        <button onClick={() => setValue(this.state.value + 1)}>
          Increment Value
        </button>
      </div>
    );
  }
}
```

Тоже самое в функциональном компоненте:

```jsx
import React, { useState } from "react";

const MyComponent = () => {
  const [value, setValue] = useState(1);
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue(value + 1)}>Increment Value</button>
    </div>
  );
};
```

Про хук [`useState()`](https://reactjs.org/docs/hooks-state.html) поговорим в следующих модулях.

### Обновление состояния

```jsx
this.setState({ value: 2 });
```

Тоже самое в функциональном компоненте:

```jsx
setValue(2);
```

## Жизненный цикл

### Что такое жизненный цикл?

Компоненты React следуют циклу: они создаются (монтируются в DOM), обновляются и умирают (демонтируются из DOM). Это жизненный цикл компонента!

### Методы жизненного цикла

- Инициализация
- Монтаж
- Обновление
- Размонтирование

### Инициализация

На этом этапе наш компонент будет устанавливать свое состояние и свойства. Обычно это делается внутри метода конструктора, например:

```jsx
class Initialize extends React.Component {
  constructor(props) {
    // calling the constructor of its parent
    super(props); // initialization process
    this.state = {
      time: new Date(),
      selectedStatus: false,
    };
  }
}
```

### Монтаж

После завершения фазы инициализации мы переходим к фазе монтирования. Это когда наш компонент React «монтируется» в DOM (он создается и вставляется в DOM).
На этом этапе доступны следующие методы:

- `componentWillMount()`
- `componentDidMount()`

```jsx
class LifeCycle extends React.Component {
  componentWillMount() {
      console.log('Component will mount!')
   }
  componentDidMount() {
      console.log('Component did mount!')
      this.getData();
  }
  getData=()=>{
   /* method to make an api call for data */
  }render() {
      return (
         <div>
            <h1>Mounting methods in action!</h1>
         </div>
      );
   }
}
```

### Обновление

После этапа монтирования, на котором создается наш компонент, мы переходим к этапу обновления. Именно здесь изменяется состояние компонента и, таким образом, происходит повторный рендеринг. Здесь мы используем следующие методы:

- `shouldComponentUpdate()`
- `componentWillUpdate()`
- `componentDidUpdate()`

### Размонтирование

Последний этап — размонтирование, где наш компонент отключается от DOM. Метод, который мы можем использовать здесь:

- `componentWillUnmount()`

[Диаграмма жизненного цикла компонента React](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

💡 Подробнее про cостояние и жизненный цикл в [документации React](https://ru.reactjs.org/docs/state-and-lifecycle.html).
