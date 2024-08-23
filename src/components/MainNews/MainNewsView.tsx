// отображение главных новостей в выбранной категории

import { ViewNews } from "./ViewNews";

export interface IMainNewsViewProps {
  listNews: Array<{text: string; picture: string; link: string ;}>
}

export const MainNewsView = ({listNews}: IMainNewsViewProps) => {
  

  return (<>
    {listNews.map(elem => <ViewNews picture={elem.picture} text={elem.text} link={elem.link} key={listNews.indexOf(elem)}/>)}
  </>);
};
