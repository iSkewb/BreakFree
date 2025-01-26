import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatGPTChat = () => {
  const [localData, setLocalData] = useState({});  // State for storing user data
  const [advice, setAdvice] = useState('');  // State for storing the response (advice)
  const [loading, setLoading] = useState(false);  // State for loading indicator

  // Fetch data from localStorage when the component mounts
  useEffect(() => {
    const savedData = localStorage.getItem('profileFormData');  // Read from localStorage
    if (savedData) {
      setLocalData(JSON.parse(savedData));  // Parse and set to state
    }
  }, []);

  // Handler for analyzing data and requesting advice
  const analyzeData = async () => {
    if (!localData || Object.keys(localData).length === 0) {
      alert('No data found in localStorage!');
      return;
    }

    setLoading(true);
    try {
      // Prepare the prompt with the user's data (and other context as needed)
      const prompt = `Provide financial advice based on this subscription data: ${JSON.stringify(localData)}`;

      // Send a request to OpenAI GPT API
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'text-davinci-003',  // Or another model, such as 'gpt-3.5-turbo'
          prompt: prompt,
          max_tokens: 200,  // Limit the response size
          temperature: 0.7,  // Controls the randomness of the output
        },
        {
          headers: {
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`,  // Replace with your OpenAI API key
            'Content-Type': 'application/json',
          }
        }
      );

      // Set the advice based on the API response
      setAdvice(response.data.choices[0].text || 'No advice received.');
    } catch (error) {
      console.error('Error fetching advice:', error);
      setAdvice('There was an error analyzing your data. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Financial Advice Chat</h1>
      <button onClick={analyzeData} disabled={loading}>
        {loading ? 'Analyzing...' : 'Get Financial Advice'}
      </button>
      {advice && <p>{advice}</p>}
    </div>
  );
};

export default ChatGPTChat;
