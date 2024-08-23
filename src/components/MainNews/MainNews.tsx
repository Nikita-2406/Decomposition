// главный компонет для отображение главных новостей

import { useState } from "react";
import { MainNewFilter } from "./MainNewFilter";
import { MainNewsView } from "./MainNewsView";
import { CurrencyRates } from "./CurrencyRate/CurrencyRates";

export const MainNews = () => {
  const [selectFilter, setSelectedFilter] = useState<HTMLElement>();

  const listFilters = ["Сейчас в СМИ", "в Германии", "Рекомендуем"];

  const listNews = [
    { text: "Ученые обнаружили новый вид медуз в океане", picture: "https://cdn-icons-png.flaticon.com/128/6660/6660528.png", link: "..." },
    { text: "Виртуальная реальность помогает в лечении фобий", picture: "https://cdn-icons-png.flaticon.com/128/3646/3646958.png", link: "..." },
    { text: "Космический зонд отправил новые снимки Марса", picture: "https://cdn-icons-png.flaticon.com/128/1146/1146394.png", link: "..." },
    { text: "Исследование показало, что смех улучшает здоровье", picture: "https://cdn-icons-png.flaticon.com/128/4722/4722786.png", link: "..." },
    { text: "В крупных городах растет интерес к городским фермерствам", picture: "https://cdn-icons-png.flaticon.com/128/9092/9092314.png", link: "..." },
    { text: "Стартовал международный конкурс по разработке экологичных технологий", picture: "https://cdn-icons-png.flaticon.com/128/4411/4411222.png", link: "..." },
  ];

  const currencyItems = [{ name: "usd", value: 99 }];

  return (
    <>
      <MainNewFilter
        listFilters={listFilters}
        changeFilter={setSelectedFilter}
        selectetedFilter={selectFilter}
      />
      <MainNewsView listNews={listNews} />
      <CurrencyRates items={currencyItems}/>
    </>
  );
};
