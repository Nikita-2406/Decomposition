// отвечает за отображение одного курса

interface ICurrencyRateViewProps {
  name: string;
  value: number;
}

export const CurrencyRateView = ({ name, value }: ICurrencyRateViewProps) => {
  return (
    <li className="currency-body">
      <span className="currencu-body">{name}</span>
      <span className="currencu-vulue">{value}</span>
    </li>
  );
};
