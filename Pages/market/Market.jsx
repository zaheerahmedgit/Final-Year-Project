import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Market.css'; // Ensure you have this CSS file

const Market = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cryptos');
        setCoins(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <div className="crypto-table-container gradient-bg-welcome">
      <div className='flex justify-center'>
      <h2 className='text-3xl uppercase text-[#e5b80b]'>Top 25 Cryptocurrencies</h2>
      </div>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>24h Volume (USD)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(coin => (
            <tr key={coin.id}>
              <td>
                <img 
                  src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`} 
                  alt={`${coin.name} icon`} 
                />
              </td>
              <td>{coin.name}</td>
              <td>${coin.quote.USD.price.toLocaleString()}</td>
              <td>${coin.quote.USD.market_cap.toLocaleString()}</td>
              <td>${coin.quote.USD.volume_24h.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Market;

