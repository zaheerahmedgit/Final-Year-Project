import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CryptoConverter = () => {
  const [fromCurrency, setFromCurrency] = useState('BTC'); // Default to Bitcoin
  const [toCurrency, setToCurrency] = useState('ETH'); // Default to Ethereum
  const [amount, setAmount] = useState(1);
  const [conversionResult, setConversionResult] = useState(null);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  // Hardcoded fiat currency prices relative to USD
  const fiatPrices = {
    USD: 1,   // USD to USD is always 1
    PKR: 280, // Price of 1 USD in PKR
    EUR: 0.95, // Price of 1 USD in EUR
    GBP: 0.83, // Price of 1 USD in GBP
    AED: 3.67  // Price of 1 USD in AED
  };

  const fetchCryptoPrices = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/cryptos');
      setCoins(response.data.data); // Store the top 25 cryptocurrencies from API
      setLoading(false);
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error);
    }
  };

  useEffect(() => {
    fetchCryptoPrices();
  }, []);

  const handleConvert = () => {
    let fromPriceInUSD;
    let toPriceInUSD;

    // Determine the price of "from" currency in USD
    if (fiatPrices[fromCurrency]) {
      fromPriceInUSD = 1 / fiatPrices[fromCurrency]; // For fiat currencies, use the hardcoded value
    } else {
      const fromCoin = coins.find((coin) => coin.symbol === fromCurrency);
      fromPriceInUSD = fromCoin ? fromCoin.quote.USD.price : null; // For cryptocurrencies, use the API price
    }

    // Determine the price of "to" currency in USD
    if (fiatPrices[toCurrency]) {
      toPriceInUSD = 1 / fiatPrices[toCurrency]; // For fiat currencies, use the hardcoded value
    } else {
      const toCoin = coins.find((coin) => coin.symbol === toCurrency);
      toPriceInUSD = toCoin ? toCoin.quote.USD.price : null; // For cryptocurrencies, use the API price
    }

    if (!fromPriceInUSD || !toPriceInUSD) {
      console.error('Price data not available for selected currencies');
      setConversionResult(null);
      return;
    }

    // Conversion formula:
    // - Convert the "fromCurrency" amount to USD, then convert that USD amount to "toCurrency"
    const convertedAmount = (amount * fromPriceInUSD) / toPriceInUSD;

    setConversionResult(convertedAmount);
  };

  if (loading) return <p>Loading crypto prices...</p>;

  const currencies = [...Object.keys(fiatPrices), ...coins.map(coin => coin.symbol)]; // Combine fiat and crypto


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gradient-bg-welcome">
      <div className="crypto-converter text-white p-10 rounded-lg shadow-lg max-w-3xl w-full blue-glassmorphism">
        <h2 className="text-3xl font-bold text-center mb-5">Cryptocurrency Converter</h2>
        <div className="converter-form">
          <label className="block text-lg mb-3">
            Amount:
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="amount-input w-full p-2 rounded-md bg-gray-700 text-white mt-1"
            />
          </label>

          <div className="flex justify-between mb-5">
            <label className="block w-full text-lg">
              From:
              <select
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
                className="from-coin w-full p-2 rounded-md bg-gray-700 text-white mt-1"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </label>

            <label className="block w-full text-lg ml-5">
              To:
              <select
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
                className="to-coin w-full p-2 rounded-md bg-gray-700 text-white mt-1"
              >
                {currencies.map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="flex justify-center mb-5">
            <button
              onClick={handleConvert}
              className="convert-button w-1/5 mx-8 p-3 rounded-full text-xl font-bold"
              style={{ backgroundColor: '#d1c406' }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#9b9108')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#d1c406')}
            >
              Convert
            </button>
          </div>

          {conversionResult !== null && (
            <div className="conversion-result mt-5 text-center">
              <h3 className="text-2xl">
                {amount} {fromCurrency} is equal to {conversionResult.toFixed(6)} {toCurrency}
              </h3>
            </div>
          )}
        </div>
      </div>
      <img src="../../../images/converter.png" />
    </div>
  );
};

export default CryptoConverter;
