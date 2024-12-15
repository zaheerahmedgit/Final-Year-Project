const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

// Use CORS middleware to allow requests from the frontend
app.use(cors());

app.get('/api/cryptos', async(req, res) => {
    try {
        console.log("action performed");
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            params: {
                limit: 25, // Change the limit
                convert: 'USD'
            },
            headers: {
                'X-CMC_PRO_API_KEY': '9ebd26cb-3448-4ae4-9de7-7c4cacc4960c'
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
        res.status(500).json({ error: 'Error fetching data' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});