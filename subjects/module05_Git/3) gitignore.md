<h1>gitignore</h1>

<p>При командной работе в одном репозиторий следует избегать добавления ненужных файлов. Например: файлы компиляции, временные файлы проекта, секретные токены и т.д.</p>

<p><code>.gitignore</code> сообщает git, какие файлы и папки следует игнорировать, чтобы они не добавились в репозиторий.</p>

<h3>Полезное</h3>

<ul>
	<li><a href="https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%97%D0%B0%D0%BF%D0%B8%D1%81%D1%8C-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9-%D0%B2-%D1%80%D0%B5%D0%BF%D0%BE%D0%B7%D0%B8%D1%82%D0%BE%D1%80%D0%B8%D0%B9#r_ignoring" rel="nofollow noopener noreferrer">Документация с примерами.gitignore</a></li>
	<li><a href="https://github.com/github/gitignore" rel="noopener noreferrer nofollow">Сборник .gitignore для разных проектов</a></li>
</ul>

<h3>Задание</h3>

<ol>
	<li>Добавить в свой репозитории <code>jusan-git</code> файл <code>.gitignore</code>, который игнорирует:</li>
</ol>

<pre><code>temp
</code></pre>

<ol>
	<li>Проверить работает ли <code>.gitignore</code>. Для этого создайте папку <code>temp</code> с любым файлом внутри и введите <code>git status</code>.</li>
	<li>Убедиться что <code>temp</code> и его содержимое не входит в список изменений.</li>
	<li>Загрузить изменения в github.</li>
	<li>Прислать ссылку на репозиторий c указанием последнего коммита в URL.</li>
</ol>