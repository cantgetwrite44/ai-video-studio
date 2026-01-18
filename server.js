const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const predictions = {};

app.post('/api/generate-video', async (req, res) => {
    try {
          const { prompt, duration, apiKey } = req.body;

      if (!prompt || !duration) {
              return res.status(400).json({ error: 'Missing prompt or duration' });
      }

      if (!apiKey) {
              return res.status(400).json({ error: 'Missing API key' });
      }

      const response = await axios.post(
              'https://api.replicate.com/v1/predictions',
        {
                  version: '145b6fbc13247e42b92b635bda29f832f4e4f9b9e5fbf8f4e2c8d7e9f5a6b7c8',
                  input: {
                              prompt: `${prompt} (${duration} second video, high quality, professional, cinematic)`,
                              num_inference_steps: 25,
                              guidance_scale: 7.5
                  }
        },
        {
                  headers: {
                              'Authorization': `Token ${apiKey}`,
                              'Content-Type': 'application/json'
                  }
        }
            );

      const predictionId = response.data.id;
          predictions[predictionId] = response.data;

      res.json({
              predictionId,
              status: 'processing'
      });
    } catch (error) {
          console.error('Error:', error.response?.data || error.message);
          res.status(500).json({
                  error: error.response?.data?.detail || 'Failed to generate video'
          });
    }
});

app.get('/api/video-status/:predictionId', async (req, res) => {
    try {
          const { predictionId } = req.params;
          const { apiKey } = req.query;

      if (!apiKey) {
              return res.status(400).json({ error: 'Missing API key' });
      }

      const response = await axios.get(
              `https://api.replicate.com/v1/predictions/${predictionId}`,
        {
                  headers: {
                              'Authorization': `Token ${apiKey}`
                  }
        }
            );

      const prediction = response.data;
          predictions[predictionId] = prediction;

      res.json({
              status: prediction.status,
              videoUrl: prediction.output,
              error: prediction.error
      });
    } catch (error) {
          console.error('Error:', error.response?.data || error.message);
          res.status(500).json({
                  error: 'Failed to check video status'
          });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🎬 AI Video Studio running on http://localhost:${PORT}`);
});
