import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EthereumPrice = () => {
  const [ethData, setEthData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEthData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/ethereum'
        );
        setEthData(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch Ethereum data');
      } finally {
        setLoading(false);
      }
    };

    fetchEthData();

    // Optionally, refresh data every minute
    const intervalId = setInterval(fetchEthData, 60000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <div>Loading Ethereum data...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='flex items-center px-3  text-gray-300 font-semibold rounded-lg'>
      <img src={ethData.image.large} alt="ethereum" className='w-10'/>
      <p>${ethData.market_data.current_price.usd.toLocaleString()}</p>
    </div>
  );
};

export default EthereumPrice;
