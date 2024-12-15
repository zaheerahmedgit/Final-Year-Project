// src/CryptoTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoTable.css'; // Ensure you have this CSS file

const CryptoTable = () => {
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
    <div>
      <h2>Top 5 Cryptocurrencies</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>24h Volume (USD)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map(coin => (
            <tr key={coin.id}>
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

export default CryptoTable;
