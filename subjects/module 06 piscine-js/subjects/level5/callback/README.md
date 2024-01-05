# Колбэки и вложенность

Пример с `setTimeout`, который мы рассмотрели, показывает, как работают функции обратного вызова — **колбэки**.

Callback (колбэк, функция обратного вызова) — функция, которая вызывается в ответ на совершение некоторого события.

В нашем случае таким событием было срабатывание таймера через 2 секунды, а колбэком — функция `greet()`. В целом, событием может быть что угодно:

- ответ от сервера;
- завершение какой-то длительной вычислительной задачи;
- получение доступа к каким-то API устройства, на котором выполняется код.

Таким образом колбэк — это первый способ обработать какое-либо асинхронное действие.

<pre>
<code>
💡 В JavaScript функции можно передавать в качестве аргументов. Функции могут иметь свойства и методы, как объекты.
</code>
</pre>

Обычный пример функции обратного вызова:

```jsx
const processName = (name) => {
  console.log(name);
};

const showName = (name, callBack) => {
  callBack(name);
};

showName("Aza", myCallback);

function myCallback(name) {
  processName(name);
}

console.log("Привет");
```

Выведет:

```console
Aza
Привет
```

В этом коде у нас есть метод `showName`, который принимает имя и колбэк в качестве параметра. Сам колбэк также принимает имя в качестве параметра.

Для асинхронного кода :

```jsx
const processName = (name) => {
  console.log(name);
};
const showName = (name, callBack) => {
  callBack(name);
};

showName("Aza", myAsyncCallback);

function myAsyncCallback(name) {
  setTimeout(() => {
    processName(name);
  }, 3000);
}

console.log("Привет");
```

Выведет:

```console
Привет
Aza
```

### Callback Hell

Предположим такой сценарий:

```jsx
showName("Aza", (name) => {
    showName1("Azamat", name) => {
        showName2("Azat", name) => {
            showName3("Altyn", name) => {
                showName4("Altyn Adam", name) => {
                    processName(name)
                }
            }
        }
    }
})
```

Вложенность запросов может разрастаться до невероятных глубин, это называют “callback hell” — адом колбэков. Разобраться, что происходит в таком коде требует усидчивости. Разработчики потеряли не мало времени и нервов во время дебага таких конструкций.

Однако этому есть решение - промисы.

<pre>
<code>
💡 Про колбэки <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/EventLoop">тут</a>.
</code>
</pre>

<pre>
<code>
💡 Про колбэки на доке <a href="https://doka.guide/js/async-in-js/#kolbeki">тут</a>.
</code>
</pre>

[Тест](./test-1.md)
