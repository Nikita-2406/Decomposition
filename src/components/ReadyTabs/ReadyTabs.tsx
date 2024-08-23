// отвечает за отображение готовых поисковых запросов

import { ReadyTab } from "./ReadyTab";

export const ReadyTabs = () => {
  const content = [
    {
      type: "weather",
      children: (
        <>
          <p>Утром +20</p>
          <p>Вечером +12</p>
        </>
      ),
    },
    {
      type: "visited",
      children: (
        <>
          <p>Недвижепость - о сталинках</p>
          <p>Маркет - Люстры и светильники</p>
        </>
      ),
    },
    {
      type: "map",
      children: (
        <>
          <p>Расписания</p>
        </>
      ),
    },
    {
      type: "TVprograms",
      children: (
        <>
          <ul>
            <li key={0}>02:00 ТНТ. Best</li>
            <li key={1}>02:15 Джинглинки</li>
            <li key={2}>02:25 Наедине со всеми</li>
          </ul>
        </>
      ),
    },
    {
      type: "esters",
      children: (
        <>
          <p>Управление как искусство</p>
          <p>Ночь. Мир в это время</p>
        </>
      ),
    },
  ];

  return (
    <>
      {content.map((elem) => (
        <ReadyTab type={elem.type}>{elem.children}</ReadyTab>
      ))}
    </>
  );
};
