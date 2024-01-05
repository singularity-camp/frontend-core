# git-init

<p>Git &mdash; это бесплатная система управления версиями, изначально созданная Линусом Торвальдсом в 2005 году.</p>

<p>Git является распределенным: каждый разработчик имеет локальный репозиторий, т.е. полную историю изменений кода. Это делает первоначальное клонирование репозитория медленным, но последующие операции, такие как <em>коммиты</em> (лат. &quot;commits&quot;), <em>сравнения</em> (лат. &quot;diff&quot;) и <em>слияния</em> (лат. &quot;merge&quot;) значительно быстрее.</p>

<p>Git также имеет отличную поддержку ветвления (англ. &quot;branching&quot;), слияния и перезаписи истории (англ. &quot;history rewrite&quot;) репозитория, что привело к появлению множества инновационных и мощных рабочих процессов и инструментов.</p>

<p>Пулл-реквесты (лат. &quot;Pull-request&quot;) &mdash; один из популярных инструментов, который позволяет командам совместно работать над ветками Git и эффективно проводить обзоры изменения кода друг-друга. На сегодняшний день Git является наиболее широко используемой системой контроля версий в мире и считается современным стандартом для разработки программного обеспечения.</p>

<h3>Полезное</h3>

<ul>
	<li><a href="https://learngitbranching.js.org/" rel="nofollow noopener noreferrer">Интерактивный тренажер git на англ</a></li>
	<li><a href="https://githowto.com/ru" rel="nofollow noopener noreferrer">Тур по git на рус</a>&nbsp; - <strong>Настоятельно рекомендую пройти этот тур шаг за шагом повторяя то, что делают они</strong></li>
	<li><a href="https://habr.com/ru/post/416887/" rel="nofollow noopener noreferrer">Как называть коммиты</a></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Создать репозиторий <code>jusan-git</code> с помощью <code>git init</code>.</li>
	<li>Создать скрипт с названием <code>script.sh</code>, который выводит ID вашего профиля на <code>stepik.org</code>.</li>
	<li>Создать файл <code>README.md</code>, который описывает, что находится в этом репозиторий - например <code>Данный репозиторий содержит скрипт для вывода моего ID на stepik.org</code>. Напишите свой уникальный текст.</li>
	<li>С помощью <code>git status</code> проверьте, какие изменения были сделаны в репозиторий.</li>
	<li>Добавить отдельно файл <code>script.sh</code> в коммит с описанием <code>add: script.sh</code>.</li>
	<li>Добавить отдельно файл <code>README.md</code> в коммит с описанием <code>add: README.md</code>.</li>
	<li>Проверьте с помощью <code>git log</code>, были ли добавлены коммиты.</li>
	<li>Проверьте с помощью <code>git status</code>, что не осталось файлов, которые нужно добавить в коммит.</li>
	<li>Отправить изменения в github.com - <code>git push</code>.</li>
	<li>Прислать ссылку на репозиторий c указанием последнего коммита в URL. Например:
	<pre>
<code class="language-no-highlight">https://github.com/username/jusan-git/tree/5a1e0d9c4c864e13f0682bec96a9f19786fad711
</code></pre>

<p>В данной URL <code>5a1e0d9c4c864e13f0682bec96a9f19786fad711</code> является идентификатором коммита. Чтобы узнать последний коммит, введите:</p>

<pre>
<code class="language-bash">git rev-parse HEAD</code></pre>
</li>
</ol>

<p>P.S.</p>

<ul>
	<li>Красивый вывод логов <code>git log --all --decorate --oneline --graph</code></li>
</ul>
