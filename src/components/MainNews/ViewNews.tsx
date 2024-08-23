// отображение одной новости


interface IViewNewsProps {
  text: string; picture: string; link: string ;
}

export const ViewNews = ({ text, picture, link }: IViewNewsProps) => {
  return (
    <li>
      <a className="news-body" href={link}>
        <img src={picture} alt="" />
        <p className="news-text">{text}</p>
      </a>
    </li>
  );
};
