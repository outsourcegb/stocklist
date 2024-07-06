import React from 'react';
import { StockMetaData as metadata } from './StockList';

interface StockMetaDataProps {
  metadata: metadata;
}

const StockMetaData: React.FC<StockMetaDataProps> = ({ metadata }) => {
  return (
    <>
      <div className='uppercase tracking-wide text-lg text-gray-800 font-semibold meta mb-4'>
        {metadata['1. Information']}
      </div>
      <div className='flex gap-5'>
        <div className='bg-white p-4 rounded-md shadow-md meta hover:shadow-lg transition-shadow duration-300 ease-in-out'>
          <p className='text-gray-700'>
            <span className='font-semibold'>Symbol:</span>{' '}
            {metadata['2. Symbol']}
          </p>
        </div>
        <div className='bg-white p-4 rounded-md shadow-md meta hover:shadow-lg transition-shadow duration-300 ease-in-out'>
          <p className='text-gray-700'>
            <span className='font-semibold'>Last Refreshed:</span>{' '}
            {metadata['3. Last Refreshed']}
          </p>
        </div>
        <div className='bg-white p-4 rounded-md shadow-md meta hover:shadow-lg transition-shadow duration-300 ease-in-out'>
          <p className='text-gray-700'>
            <span className='font-semibold'>Interval:</span>{' '}
            {metadata['4. Interval']}
          </p>
        </div>
        <div className='bg-white p-4 rounded-md shadow-md meta hover:shadow-lg transition-shadow duration-300 ease-in-out'>
          <p className='text-gray-700'>
            <span className='font-semibold'>Output Size:</span>{' '}
            {metadata['5. Output Size']}
          </p>
        </div>
        <div className='bg-white p-4 rounded-md shadow-md meta hover:shadow-lg transition-shadow duration-300 ease-in-out'>
          <p className='text-gray-700'>
            <span className='font-semibold'>Time Zone:</span>{' '}
            {metadata['6. Time Zone']}
          </p>
        </div>
      </div>
    </>
  );
};

export default StockMetaData;
