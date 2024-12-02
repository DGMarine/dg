const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  const apiUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${symbol}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
});

app.listen(3000, () => console.log('Server is running on port 3000'));
