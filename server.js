const express = require('express');
const cors = require('cors'); // Import CORS library
const fetch = require('node-fetch');

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  const apiUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
