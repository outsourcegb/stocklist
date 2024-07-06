import React from 'react';
import { StockItemData } from './StockList';

export interface StockItemDataProps {
  index: string;
  stock: StockItemData;
}

const StockItem: React.FC<StockItemDataProps> = ({ index, stock }) => {
  return (
    <div
      key={index}
      className={`grid grid-cols-6 gap-4 text-left px-4 py-2 odd:bg-white even:bg-slate-100`}
    >
      <div>{index}</div>
      <div>{stock['1. open']}</div>
      <div>{stock['2. high']}</div>
      <div>{stock['3. low']}</div>
      <div>{stock['4. close']}</div>
      <div>{stock['5. volume']}</div>
    </div>
  );
};

export default StockItem;
