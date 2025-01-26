// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: 'YOUR_OPENAI_API_KEY',
});
const openai = new OpenAIApi(configuration);

app.post('/api/chat', async (req, res) => {
  try {
    const { userData, userMessage } = req.body;

    const messages = [
      { role: 'system', content: `You are an assistant giving advice on subscription usage.` },
      { role: 'user', content: `User data: ${JSON.stringify(userData)}` },
      { role: 'user', content: userMessage },
    ];

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages,
    });

    const reply = response.data.choices[0].message.content;
    res.status(200).json({ reply });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Error communicating with OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
