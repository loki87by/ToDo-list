# ToDo-list

## Amwork Frontend Test Assignment

Реализовать колонку с *задачами*,

**Стек технологий:**

- React 18, **TypeScript**;
- Запросы — axios;
- Css — modules + **preprocessor**, SCSS, styled-components, less;
- Если понадобится state managerг — использовать **MobX**;
- Для генерации данных — **faker.js** или аналогичные библиотеки;

**Техническое задание:**

1. Получить массив *todo* — [https://isonplaceholder.typicode.com/todos](https://jsonplaceholder.typicode.com/todos)
2. Отрисовать колонку с todo по макету *Figma* —

[https://www.figma.com/file/1QLIqDLCZ5SQW7nTL9qDEK/Untitled?type=design&node-id=0%3A3&mode=design&t=R7hRhmYbf7PGClFR-1](https://www.figma.com/file/1QLIqDLCZ5SQW7nTL9qDEK/Untitled?type=design&node-id=0%3A3&mode=design&t=R7hRhmYbf7PGClFR-1)

- Заголовок задачи — *todo.title*, состояние чекбокса — *todo.completed*;
- Заголовок задачи может занимать три строки, затем он должен уходить в *ellipsis* (троеточие);
![example1](https://github.com/loki87by/ToDo-list/blob/main/md_files/example1.jpg?raw=true)
- Описание задачи генерировать рандомно при помощи *faker.js* или аналогичных библиотек, оно также должно уходить в **эллипсис**, но занимать может только одну строку;
![example1](https://github.com/loki87by/ToDo-list/blob/main/md_files/example1.jpg?raw=true)
- **Тэги**, аналогично описанию, заполнить тестовыми данными, их всегда два — *фиолетовый* и *серый*;
- **Даты** — рандомные, но должны отличаться, назвать их можно *startDate* и *endDate*;
- **Аватарка пользователя** моковая (всегда одна и та же) и не зависит от *todo.userld*, ее можно вставить просто как *svg/png* (*png* предпочтительнее во избежание проблем с *resolution*).

**А также:**

1. Колонка должна иметь фиксированную высоту и внутренний вертикальный **скролл**;
2. В заголовке колонки должно отображаться количество загруженных задач, кнопка «+» не функциональная;
3. Шрифты можно использовать **системные**, например:
font-family: *-apple-system, ‘system-ui', 'BlinkMacSystemFont'’, "Segoe UI', 'Noto Sans’, Helvetica, Arial, sans-serif, ‘Apple Color Emoji', ‘Segoe UI Emoji', 'Segoe UI Symbol’, ‘Noto Color Emoj*.
4. Выполненное задание залить на *GitHub*, предоставить **ссылку** на репозиторий.

**Будет плюсом:**

- Использование Vite;
- Превью (деплой) на GitHub Pages или Vercel;
- Реализация **infinite scroll**, для этого в json placeholder есть параметр *_page*.
