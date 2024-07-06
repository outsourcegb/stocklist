import React, { useEffect, useState } from 'react';
import StockMetaData from './StockMetaData';
import StockItem from './StockItem';

export type StockMetaData = {
  '1. Information': string;
  '2. Symbol': string;
  '3. Last Refreshed': string;
  '4. Interval': string;
  '5. Output Size': string;
  '6. Time Zone': string;
};

export type StockItemData = {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
};

const StockList = () => {
  const [stocks, setStocks] = useState<StockItemData[] | []>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [metaData, setMetaData] = useState<StockMetaData | null>(null);

  const fetchStocks = async () => {
    setLoading(true);
    const uri =
      'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo';
    const response = await fetch(uri);
    const data = await response.json();

    if (data['Meta Data'] && data['Time Series (5min)']) {
      const metaData: StockMetaData = data['Meta Data'];
      setMetaData(metaData);
      setStocks(data['Time Series (5min)']);
      setLoading(false);
    } else {
      console.log('Error fetching data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <div className='max-w-7xl mx-auto px-4'>
      {loading ? (
        <div className='flex justify-center items-center h-screen'>
          <div className='text-lg font-semibold'>Loading...</div>
        </div>
      ) : (
        <div className='w-full mx-auto bg-gradient-to-r shadow-xl overflow-hidden p-6'>
          <div className='p-4'>
            {metaData && <StockMetaData metadata={metaData} />}

            <div className='mt-8'>
              <div className='w-full'>
                <div className='grid grid-cols-6 gap-4 text-left px-4 py-2'>
                  <div className='font-semibold'>Time</div>
                  <div className='font-semibold'>Open</div>
                  <div className='font-semibold'>High</div>
                  <div className='font-semibold'>Low</div>
                  <div className='font-semibold'>Close</div>
                  <div className='font-semibold'>Volume</div>
                </div>
                {Object.entries(stocks).map(([key, data]) => (
                  <StockItem index={key} stock={data} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StockList;
