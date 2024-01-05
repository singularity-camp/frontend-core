# Создание пользовательских хуков

Хуки открывают совершенно новый способ написания функциональных компонентов , позволяя нам добавлять функции, доступные для компонентов класса, такие как логика с отслеживанием состояния.

### Как создать свои собственные хуки React

Пользовательский хук — это функция, которая начинается со слова use и может вызывать другие хуки. Соглашение об именах «useWhatever» в основном предназначено для того, чтобы позволить линтеру находить ошибки в использовании этих хуков, например, сценарии, в которых использование противоречит правилам хуков.

В следующем примере мы извлечем данные из компонента `Home` и отобразим их.

Используем сервис `JSONPlaceholder` для получения данных. Этот сервис отлично подходит для тестирования приложений, когда нет существующих данных.

`index.js:`

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-level 4 dom/client";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
```

Логика `fetch` может понадобиться и в других компонентах, поэтому извлечем ее в пользовательский хук.

Переместим `fetch` в новый файл, который будет использоваться в качестве пользовательского хука:

`useFetch.js`:

```jsx
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
```

`index.js`:

```jsx
import ReactDOM from "react-level 4 dom/client";
import useFetch from "./useFetch";

const Home = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home />);
```

Мы создали новый файл с именем `useFetch.js`, содержащий функцию `useFetch`, которая содержит всю логику, необходимую для получения данных.

В `index.js` мы импортируем наш хук useFetch и используем его как любой другой хук. Здесь мы передаем URL для получения данных.

Теперь мы можем повторно использовать этот пользовательский хук в любом компоненте для получения данных с любого URL-адреса.

💡 Подробнее про cоздание пользовательских хуков в [документации React](https://ru.reactjs.org/docs/hooks-custom.html).
