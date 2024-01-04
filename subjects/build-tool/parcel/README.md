# Сборщик проекта

[Parcel](https://parceljs.org/docs/) - это инструмент для сборки веб-приложений и библиотек, который не требует настройки в небольших приложениях.

Попробуем создать тестовый проект, чтобы разобраться в работе сборщика. Для этого нам нужно:

- Устрановить parcel
- Cоздать `index.html` и модуль на JS
- Использовать команду `parcel index.html`, чтобы собрать проект в `dev-режиме`.

### Создадайте директорию с названием `project-sum`

```bash
$ mkdir project-sum
```

### Сгененируйте пакетный менеджер

```bash
$ npm init
```

### Устанавливаем `parcel`

```bash
$ npm install parcel --save-dev
```

Создадим директорию проекта с такой структурой:

```bash
project-sum/
    ─ index.html
    ─ package-lock.json
    ─ package.json
    ─ src
        ─ index.js
        ─ modules
            ─ sum.js
```

Примерно так должен выглядеть `package.json`:

```jsx
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "parcel": "^2.0.1" // ваша версия может отличаться
  }
}
```

В модуле `sum.js` будет функция для подсчета суммы аргументов:

```jsx
export function sum(...args) {
  if (args.length === 0) {
    throw Error("Должно быть больше 1 аргумента");
  }

  return args.reduce((result, current) => result + current, 0);
}
```

В корневом JS-файле `index.js`:

```jsx
import { sum } from "./modules/sum";

const root = document.querySelector("#root");
root.textContent = sum(6, -1).toString();
```

Подключаем скрипт в файле `index.html`:

```html
<html>
  <head>
    <script src="src/index.js" type="module"></script>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

у элемента `<script>` указываем атрибут `type="module"`. Если этого не сделать `parcel` при сборке покажет ошибку о том, что «обычные» браузерные скрипты не могут иметь инструкции `import`, `export`.

Запускаем проект командой:

```bash
$ npm run dev
```

В консоли вы увидите, где доступен ваш dev-сервер:

```bash
...

Server running at http://localhost:1234
✨  Built in 121ms.
```

Проект запустится в watch-режиме:

```
💡 Когда вы будете делать изменения в файлах, watch-режим позволит не перезапускать сборку. Parcel сам отследит изменения и пересоберёт проект.
```

Если вы хотите изменить порт сервера, параметры и добавить что-то от себя в сборку, прочитайте как это сделать в [документации](https://parceljs.org/docs/).

Несмотря на то, что сборщик не нужно настраивать для небольших проектов, Parcel можно сконфигурировать практически под любые нужды. В документации есть список разных типов плагинов, которые можно подключить.

Еще больше материала можно почитать [тут](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Package_management).
