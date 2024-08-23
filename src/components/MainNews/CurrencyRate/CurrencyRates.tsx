// отображение курса валют

import { CurrencyRateView } from "./CurrencyRateView";

interface ICurrencyRateProps {
  items: Array<{
    name: string;
    value: number;
  }>;
}

export const CurrencyRates = ({ items }: ICurrencyRateProps) => {
  return (
    <>
      <ul>
        {items.map((elem) => (
          <CurrencyRateView name={elem.name} value={elem.value} key={items.indexOf(elem)}/>
        ))}
      </ul>
    </>
  );
};
