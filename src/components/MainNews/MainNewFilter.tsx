// компонент для отображения фильтров и взаимодействия с ними

import React from "react";

interface IMainNewFilterProps {
  listFilters: Array<string>;
  changeFilter: Function;
  selectetedFilter: HTMLElement | undefined;
}

export const MainNewFilter = ({
  listFilters,
  changeFilter,
  selectetedFilter,
}: IMainNewFilterProps) => {
  const handlerClick = ({ target }: React.MouseEvent<HTMLElement>) => {
    changeFilter(target);
    (target as HTMLElement).classList.add("select");
    if (selectetedFilter !== undefined) {
      selectetedFilter.classList.remove("select");
    }
  };

  return (
    <ul>
      {listFilters.map((elem) => (
        <li key={listFilters.indexOf(elem)} className="filter-name" onClick={handlerClick}>
          {elem}
        </li>
      ))}
    </ul>
  );
};
