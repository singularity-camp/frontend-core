<h1>branch</h1>

<p>Когда вы хотите добавить новую функцию или исправить ошибку — независимо от того, насколько она велика или мала, — вы создаете новую ветку для изолирования ваших изменений. Это позволяет параллельно разрабатывать новую функционал, не внося изменения в основную ветку.</p>

<p>Например, неопытные разработчики работают в одной ветке и параллельно разрабатывают разные части проекта. Если они внесут изменения в одни и те же файлы, то они будут прерывать работу друг друга. Это замедлит процесс разработки и командной работы.</p>

<p>Лучшей практикой для совместной разработки будет работа на разных ветках. Допустим, первый разработчик делает <code>авторизацию</code>, а второй <code>логирование</code>. Тогда им нужно создать разные ветки под свои задачи и работать в них.</p>

<p>Cоздадим ветки:</p>

<ul>
	<li><code>git branch authorization</code> для первого разработчика</li>
	<li><code>git branch logging</code> для второго разработчика</li>
</ul>

<pre><code>        authorization
        *–––––––––––––––––*
       /                   \
––––––* master ––––––*––––––*––––
       \            /
        *––––––––––*
        logging
</code></pre>

<p>Чтобы переключиться на ветку <code>authorization</code> необходимо ввести:</p>

<pre>git checkout authorization</pre>

<p>Теперь можно параллельно работать над кодом, не мешая другому разработчику. То есть, также делать коммиты и пушить их в репозиторий.</p>

<h3>Полезное</h3>

<ul>
	<li><a href="https://www.atlassian.com/git/tutorials/using-branches" rel="nofollow noopener noreferrer">Про ветки с иллюстрациями</a></li>
	<li><a href="https://githowto.com/ru/creating_a_branch" rel="nofollow noopener noreferrer">Работа с ветками на примере</a></li>
	<li><a href="https://habr.com/ru/post/106912/" rel="nofollow noopener noreferrer">GitFlow: Удачная модель ветвления для Git</a></li>
</ul>

<h3>Задание</h3>

<p>1. В репозитории <code>jusan-git</code> создайте две новые ветки - <code>feature/username</code> и <code>new-readme</code>.</p>

<p>2. В ветке <code>feature/username</code> добавьте новый файл <code>username.sh</code>, который выводит ваше имя и фамилию на латинском в формате <code>Имя Фамилия</code>. Сделать коммит с названием <code>add: username.sh</code>.</p>

<p>3. В ветке <code>feature/username</code> измените файл <code>README.md</code>. Добавьте в описании, что скрипт <code>username.sh</code> выводит ваше имя - формат свободный. Сделать коммит с названием <code>edit README.md: username.sh description</code>.</p>

<p>4. В ветке <code>new-readme</code> измените файл <code>README.md</code>. Добавьте картинку после заголовка h1, ссылка картинки ниже. Сделать коммит с названием <code>edit README.md: add image</code>.</p>

<p><img alt="" height="230" name="image.png" src="https://ucarecdn.com/02b8ff49-8f2b-4ce9-be84-7d4bdc6b9b67/" width="230"></p>

<p>5. Загрузите изменения <code>git push</code></p>

<p>6. Прислать ссылку на репозиторий c указанием последнего коммита мастера в URL.</p>