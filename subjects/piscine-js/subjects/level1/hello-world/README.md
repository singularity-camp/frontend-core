# Hello World

В этом уроке вы напишете свой первый Hello, Jusan на JS.

Рассмотрим 3 варианта запуска кода:

### 1. Вне браузера:

Создайте файл hello-jusan.js:

```console
touch hello-jusan.js
```

Запишите в него 1 строку кода:

```console
echo > "console.log('Hello Jusan')" > hello-jusan.js
```

Запустим код с помощью node.js.

```console
node hello-jusan.js
```

<pre>
 <code>
  💡 Node.js® — это JavaScript-окружение построенное на движке Chrome V8.
 </code>
</pre>

<pre>
 <code>
  Eсли NodeJs неустановлен - скачайте его по <a href="https://nodejs.org/ru/download/">ссылке</a>
 </code>
</pre>

### 2. В браузере:

Для этого создадим файл index.html, где опишем код js в тег <script>:

```console
echo '<script> console.log("Hello, Jusan"); </script>' > index.html
```

Откройте файл index.html в браузере, в консоли разработчика вы должны увидеть вывод `"Hello,Jusan"`.

<aside>
💡 В большинстве браузеров, работающих под Windows, инструменты разработчика можно открыть нажав `F12` . В Chrome для Mac используйте комбинацию `Cmd+Opt+J`, Safari: `Cmd+Opt+C` (необходимо предварительное включение «Меню разработчика»).
</aside>

### 3. С помощью простого сервера python:

Введите команду в директории, где лежит index.html:

```console
python3 -m http.server
```

Откройте браузер по адресу `http://localhost:8000/`

<pre>
 <code>
  💡 О том как <a href="https://developer.mozilla.org/ru/docs/Learn/Common_questions/set_up_a_local_testing_server">настроить локальный сервер для тестирования.</a>
 </code>
</pre>

[Следующий урок](../variables)
