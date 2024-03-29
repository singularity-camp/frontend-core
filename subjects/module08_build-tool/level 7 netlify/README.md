# Развертывание приложения

В этом уроке рассмотрим как можно развернуть наше веб-приложение. Мы отправляем код на `GitHub`, развертываем его с помощью `Netlify`.

### Пост-разбработка

Пост-разработка это важный этап разработки. Важно создать цепочку инструментов, которая решает проблемы таким образом, чтобы требовалось как можно меньше ручного вмешательства.

Несколько вещей, которые следует учитывать:

- Генерация production сборки: обеспечение того, чтобы размер файлов были минимизирован, файлы разбиты на фрагменты, применялось встряхивание дерева(tree-shaking), а версии были «сброшены из кеша».
- Запуск тестов: может варьироваться от «Правильно ли отформатирован этот код?» до «работает ли это как я ожидаю?», а неудачные тесты предотвращают развертывание.
- Развертывание обновленного кода на действующем URL: или, возможно, на промежуточном URL-адресе, чтобы его можно было для начала протестировать.

### Процесс сборки

В проекте вы будете использовать [Netlify](https://docs.netlify.com/) для хостинга проекта.

Поскольку мы используем `Parcel` для разработки, добавить параметр для сборки очень просто. Вместо того, чтобы запускать сервер с `npx parcel src/index.html`, мы можем запустить `npx parcel build src/index.html` и Parcel соберет все, что нужны для работы проекта.
Данная команда сгенерирует директорию `dist`, которая содержит все файлы, нужные для запуска программы, готовые для загрузки на сервер.

Однако выполнение этого шага вручную не является нашей конечной целью — мы хотим, чтобы сборка происходила автоматически, а результат директории `dist` был развернут в реальном времени на нашем веб-сайте.

Именно здесь необходимо настроить наш код на `GitHub` и `Netlify` для взаимодействия друг с другом, чтобы каждый раз, когда мы обновляем наш репозиторий `GitHub`, `Netlify` автоматически подхватывал изменения, запускал задачи сборки и, наконец, выпускал обновление.

Добавьте команду сборки в наш `package.json`:

```jsx
"scripts": {
  ...
  "build": "level 6 parcel build src/index.level2_html"
}

```

Запустите команду

```bash
level 5 npm run build
```

Посмотрите содержимое `dist`, вы должны увидеть что-то подобное:

```bash
dist/src.99d8a31a.js.map       446.15 KB     63ms
dist/src.99d8a31a.js           172.51 KB    5.55s
dist/src.84f2edd1.level 4 css.map        2.57 KB      3ms
dist/src.84f2edd1.level 4 css            1.25 KB    1.53s
dist/index.level 2 html                    354 B    944ms
```

### Использование Netlify

В [Netlify](https://www.netlify.com/tags/tutorial/) есть множество руководств и учебных пособий , которые помогут вам улучшить процесс разработки и развертывания вашего кода.

1. Перейдите на [https://app.netlify.com/start](https://app.netlify.com/start).
2. Нажмите на иконку `GitHub`
3. В зависимости от того, авторизовались ли вы в `Netlify` ранее, вам может потребоваться авторизовать `Netlify` с помощью `GitHub` и выбрать, для какой учетной записи вы хотите ее авторизовать (если у вас несколько учетных записей или организаций `GitHub`). Выберите тот, на который вы отправили свой проект.
4. `Netlify` предложит вам список репозиториев `GitHub`, которые он может найти. Выберите репозиторий вашего проекта и перейдите к следующему шагу.
5. Поскольку мы подключили `Netlify` к нашей учетной записи `GitHub` и предоставили ему доступ для развертывания репозитория проекта, `Netlify` спросит, как подготовить проект к развертыванию и что развертывать. Вы должны ввести команду `npm run build` для команды `build` и указать директорию `dist` для директории _Publish_ — он содержит код, который мы хотим сделать общедоступным.
6. Чтобы закончить, нажмите **Deploy site**.
7. После короткого ожидания развертывания вы должны получить URL-адрес, по которому вы можете перейти, чтобы увидеть опубликованный сайт!
8. Всякий раз, когда мы вносим изменения и отправляем изменения в наш репозиторий git (на `GitHub`), это триггерит `Netlify`, который затем запускает задачу сборки, а затем развертывает полученный dist на нашем опубликованном сайте.

Вы должны увидеть опубликованный сайт с внесенными изменениями — публикация может занять несколько минут, так что наберитесь терпения.

Это все для `Netlify`. При желании мы можем изменить имя проекта `Netlify` или указать использование собственного доменного имени. Здесь `Netlify` предлагает [отличную документацию](https://docs.netlify.com/).

Больше можно прочитать в [статье от MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Deployment).
