const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/api/kaggle/competitions', async (req, res) => {
  try {
    const response = await axios.get('https://www.kaggle.com/api/v1/competitions/list', {
      auth: {
        username: process.env.KAGGLE_USERNAME,
        password: process.env.KAGGLE_KEY,
      },
    });

    const competitions = response.data.map((competition) => ({
      title: competition.title || 'No Title',
      url: competition.ref?.startsWith('https://www.kaggle.com')
        ? competition.ref
        : `https://www.kaggle.com${competition.ref}`,
    }));

    res.json(competitions);
  } catch (error) {
    console.error('Error fetching competitions:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to fetch competitions' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
