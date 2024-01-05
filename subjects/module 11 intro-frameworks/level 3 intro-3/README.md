# Главные особенности фреймворков

## Языки предметной области

Все платформы, обсуждаемые в этом модуле, основаны на JavaScript, и все они позволяют использовать предметно-ориентированные языки (Domain-specific languages/DSL).
Наример, React использует `JSX`, Ember использует `Handlebars`.

DSL не могут быть прочитаны браузером напрямую - они должны быть сначала преобразованы в JavaScript или HTML.

### JSX

[**JSX**](https://reactjs.org/docs/introducing-jsx.html), что означает JavaScript и XML - это расширение JavaScript, с HTML-подобным синтаксисом. Он был изобретен командой React для использования в приложениях React, но может использоваться для разработки других приложений, например, Vue.

Ниже показан простой пример JSX:

```jsx
const subject = "World";
const header = (
  <header>
    <h1>Hello, {subject}!</h1>
  </header>
);
```

При использовании с React JSX из предыдущего фрагмента будет скомпилирован в это:

```jsx
var subject = "World";
var header = React.createElement(
  "header",
  null,
  React.createElement("h1", null, "Hello, ", subject, "!")
);
```

При окончательном отображении в браузере приведенный выше фрагмент кода создаст HTML-код, который выглядит следующим образом:

```html
<header>
  <h1>Hello, World!</h1>
</header>
```

### Handlebars

Язык шаблонов **Handlebars** не специфичен для приложений Ember, но широко им используется.
Как и JSX, Handlebars использует фигурные скобки для вставки значения переменной. Handlebars использует двойную пару фигурных скобок вместо одной пары.

Шаблон Handlebars:

```hbs
<header>
  <h1>Hello, {{subject}}!</h1>
</header>
```

Данные:

```jsx
{
  subject: "World";
}
```

Handlebars будет строить HTML следующим образом:

```jsx
<header>
  <h1>Hello, World!</h1>
</header>
```

## Написание компонентов

Большинство фреймворков имеют какую-то компонентную модель. Компоненты React можно писать с помощью JSX, компоненты Ember с помощью Handlebars, компоненты Angular и Vue с синтаксисом шаблонов, который расширяет HTML.

### Пропсы

Properties или props — это внешние данные, которые нужны компоненту для рендеринга. Например, создадим компонент `AuthorCredit`, который будет использоваться для разных статей.  Этот компонент должен отображать портрет автора и краткую подпись о нем. Чтобы знать, какое изображение отображать и какую подпись печатать, `AuthorCredit` необходимо принять некоторые данные. Это и есть пропсы.

Представление этого `AuthorCredit`компонента в React может выглядеть примерно так:

```jsx
function AuthorCredit(props) {
  return (
    <figure>
      <img src={props.src} alt={props.alt} />
      <figcaption>{props.byline}</figcaption>
    </figure>
  );
}
```

Чтобы визуализировать этот компонент, мы должны вставить компонент и передать нужные пропсы данным образом:

```jsx
<AuthorCredit
  src="./assets/zelda.png"
  alt="Portrait of Zelda Schiff"
  byline="Zelda Schiff is editor-in-chief of the Library Times."
/>
```

Это в конечном итоге отобразит `<figure>` элемент в браузере с его структурой, определенной в `AuthorCredit` компоненте, и его содержимым, как определено в свойствах, включенных в `AuthorCredit` вызов компонента:

```html
<figure>
  <img src="assets/zelda.png" alt="Portrait of Zelda Schiff" />
  <figcaption>Zelda Schiff is editor-in-chief of the Library Times.</figcaption>
</figure>
```

### Состояние

В качестве примера рассмотрим кнопку, которая подсчитывает количество нажатий на нее. Этот компонент должен отвечать за отслеживание собственного состояния счетчика и может быть написан следующим образом:

```jsx
function CounterButton() {
  const [count] = useState(0);
  return <button>Clicked {count} times</button>;
}
```

[`useState()`](https://ru.reactjs.org/docs/hooks-state.html) — это хук React, который, учитывая начальное значение данных, будет отслеживать это значение по мере его обновления. Первоначально код будет отображаться в браузере следующим образом:

```html
<button>Clicked 0 times</button>
```

Вызов `useState()` надежно отслеживает `count` значение в приложении, и вам не нужно писать код, чтобы сделать это самостоятельно.

### События

Чтобы быть интерактивными, компонентам нужны способы реагировать на события браузера. Каждая платформа предоставляет собственный синтаксис для прослушивания событий браузера, который ссылается на имена эквивалентных событий браузера.

В React для прослушивания `click` события требуется специальное свойство `onClick`. Давайте обновим наш `CounterButton`, чтобы он мог подсчитывать клики:

```jsx
function CounterButton() {
  //добавили setCount
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
  );
}
```

В этой версии мы используем дополнительную функциональность `useState()` и создаем функцию `setCount()`, которую можно вызывать для обновления значения `count`.

## Компоненты стиля

Каждый фреймворк предлагает способ определения стилей для компонентов или для приложения в целом. Хотя подход каждого фреймворка к определению стилей компонента немного отличается, все они дают несколько способов сделать это. С добавлением некоторых вспомогательных модулей вы можете стилизовать свои  приложения в `Sass` или `Less` или транспилировать свои таблицы стилей `CSS` с помощью `PostCSS`.

## Жизненный цикл

В контексте фреймворка жизненный цикл компонента представляет собой набор фаз, через которые проходит компонент с момента его добавления в DOM и последующего рендеринга браузером до момента его удаления из DOM. Все фреймворки следуют одной и той же общей модели: они позволяют разработчикам выполнять определенные действия при монтировании компонента , при его рендеринге, при размонтировании и на многих промежуточных этапах между ними.

Эта [диаграмма жизненного цикла компонента React](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/) предлагает общий обзор концепции.

## Отрисовка элементов

### Virtual DOM

Виртуальный DOM — это подход, при котором информация о DOM вашего браузера хранится в памяти JavaScript. Ваше приложение обновляет эту копию DOM, а затем сравнивает ее с «настоящей» DOM. Приложение создает "diff" для сравнения различий между обновленным виртуальным DOM и отображаемым в данный момент DOM и использует этот diff для применения обновлений к реальному DOM. И React, и Vue используют виртуальную модель DOM, но они не применяют одну и ту же логику при сравнении или рендеринге.

Подробнее [о Virtual DOM](https://reactjs.org/docs/faq-internals.html#what-is-the-virtual-dom) можно прочитать в документации React.

### Incremental DOM

Инкрементальный DOM похож на виртуальный DOM тем, что он создает DOM-diff, чтобы решить, что отображать, но отличается тем, что не создает полную копию DOM в памяти JavaScript. Он игнорирует части DOM, которые не нужно изменять. Angular — единственный фреймворк, обсуждаемый до сих пор в этом модуле, который использует инкрементный DOM.

Подробнее [об Incremental DOM](https://auth0.com/blog/incremental-dom/) можно прочитать в блоге Auth0 .

### Виртуальная машина Glimmer 

Виртуальная машина Glimmer уникальна для Ember. Это не виртуальный DOM и не инкрементный DOM; это отдельный процесс, с помощью которого шаблоны Ember преобразуются в своего рода «байтовый код», который легче и быстрее читать, чем JavaScript.

## Маршрутизация

Каждая из платформ, рассматриваемых в этом модуле, предоставляет библиотеку (или несколько библиотек), которая помогает разработчикам реализовывать маршрутизацию на стороне клиента в своих приложениях.

## Тестирование

Каждый фреймворк имеет обширные инструменты в своей экосистеме с возможностями как для модульного, так и для интеграционного тестирования.

Пример тестирования react-приложения:

```jsx
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-level4_dom/extend-expect";

import CounterButton from "./CounterButton";

it("renders a semantic with an initial level 04 state of 0", () => {
  const { getByRole } = render(<CounterButton />);
  const btn = getByRole("button");

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveTextContent("Clicked 0 times");
});

it("Increments the count when clicked", () => {
  const { getByRole } = render(<CounterButton />);
  const btn = getByRole("button");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 1 times");

  fireEvent.click(btn);
  expect(btn).toHaveTextContent("Clicked 2 times");
});
```

```bash
💡 Выше была терминология c которой вы будете сталкиваться далее на курсе. В модуле по изучению React вы
подробнее разберете, и самое главное примените на практике данные темы.
```

Полезные ссылки:

- [Introduction to client-side frameworks](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction)
