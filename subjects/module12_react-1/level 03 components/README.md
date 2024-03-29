# Компоненты и пропсы

> [Компоненты позволяют разбить интерфейс](https://ru.reactjs.org/docs/components-and-props.html) на независимые части, про которые легко думать в отдельности. Их можно складывать вместе и использовать несколько раз.

## React - компоненты

Компоненты — это независимые и многократно используемые фрагменты кода. Они служат той же цели, что и функции JavaScript, но работают изолированно и возвращают HTML.

Компоненты бывают двух типов: классовые компоненты и функциональные компоненты. В этом руководстве мы сосредоточимся на функциональных компонентах.

```bash
💡 В коде, использующем старую версию React, вы можете найти в основном используемые компоненты класса. Теперь предлагается использовать функциональные компоненты вместе с хуками, которые были добавлены в React 16.8. Для справки есть необязательный раздел о компонентах класса.
```

## Пишем компонент

При создании компонента React имя компонента должно начинаться с заглавной буквы.

### Классовый компонент

Компонент класса должен включать extends `React.Component` оператор. Этот оператор создает наследование для `React.Component` и предоставляет вашему компоненту доступ к функциям `React.Component`.

Для компонента также требуется метод `render()`.

Пример:

```jsx
class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}
```

### Функциональный компонент

Тот же пример, что и выше, но созданный с использованием функционального компонента.

Он также возвращает HTML и ведет себя почти так же, но функциональные компоненты могут быть написаны с использованием гораздо меньшего количества кода, их легче понять.

Пример:

```jsx
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
```

## Пропсы

Пропсы похожи на аргументы функций, их можно отправить в компонент как атрибуты.

Пример:

```jsx
function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Car color="red" />);
```

В примере выше компонент `Car` принимает объект `props`.

### Пропсы можно только читать

Компонент никогда не должен что-то записывать в свои пропсы — вне зависимости от того, функциональный он или классовый.

💡 Подробнее про Компоненты и пропсы в [документации React](https://ru.reactjs.org/docs/components-and-props.html).
