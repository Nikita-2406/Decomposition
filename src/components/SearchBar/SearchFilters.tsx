// фильтры над поисковой строкой

import React from "react";

interface ISearchFiltersProps {
  setSelectFiler: Function;
  selectFiler: HTMLElement | undefined;
  filtersList: Array<string>;
}

export const SearchFilters = ({
  setSelectFiler,
  selectFiler,
  filtersList,
}: ISearchFiltersProps) => {

  const handlerClick = ({ target }: React.MouseEvent<HTMLElement>) => {
    console.log(target, typeof setSelectFiler);
    setSelectFiler(target);
    (target as HTMLElement).classList.add("select");
    if (selectFiler !== undefined) {
      selectFiler.classList.remove("select");
    }
  };

  return (
    <ul className="search-filter">
      {filtersList.map((elem) => (
        <li className="search-filter-li" onClick={handlerClick} key={filtersList.indexOf(elem)}>
          {elem}
        </li>
      ))}
    </ul>
  );
};
