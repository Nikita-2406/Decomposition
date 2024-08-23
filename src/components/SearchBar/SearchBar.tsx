// гланый компонент, отвечающий за всю поисковую часть

import { useState } from "react";
import { RandomPhrase } from "./RandomPhrase";
import { SearchField } from "./SearchField";
import { SearchFilters } from "./SearchFilters";

export const SearchBar = () => {
  const [selectFiler, setSelectFiler] = useState<HTMLElement | undefined>()

  const [searchQuery, setSearchQuery] = useState<string>()

  const filtersList = ["Видео", "Картинки", "Новости", "Карты", "Маркет", "Переводчик", "Эфир", "ещё"]

  const randomPhraseList = [
    "Как научиться разговаривать с растениями?",
  ];

  return (
    <>
      <SearchFilters setSelectFiler={setSelectFiler} selectFiler={selectFiler} filtersList={filtersList}/>
      <SearchField setSearchQuery={setSearchQuery}/>
      <RandomPhrase randomPhraseList={randomPhraseList} />
    </>
  );
};
