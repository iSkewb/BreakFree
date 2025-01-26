import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatGPTChat.css';

const ChatGPTChat = () => {
  const [localData, setLocalData] = useState({});  // State for storing user data
  const [advice, setAdvice] = useState('');  // State for storing the response (advice)
  const [loading, setLoading] = useState(false);  // State for loading indicator

  // Fetch data from localStorage when the component mounts
  useEffect(() => {
    const savedProfileData = localStorage.getItem('profileFormData');  // Read profile data from localStorage
    const savedSubscriptionData = localStorage.getItem('subscriptionData');  // Read subscription data from localStorage

    const profileData = savedProfileData ? JSON.parse(savedProfileData) : {};
    const subscriptionData = savedSubscriptionData ? JSON.parse(savedSubscriptionData) : {};

    setLocalData({ ...profileData, subscriptions: subscriptionData });  // Combine and set to state
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
      const prompt = `You are a financial advisor. Based on the following subscription data, provide detailed financial advice and suggestions for optimizing expenses. Consider the user's spending habits, potential savings, and the companies they are subscribed to and any relevant information related. Here is the user's subscription data: ${JSON.stringify(localData)}. Keep it to a few sentences`;

      // Send a request to OpenAI GPT API
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini-2024-07-18',
          messages: [
            { role: 'system', content: 'You are a sophisticated financial advisor.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 200,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer API KEY HERE`,  // Add your OpenAI API key here
            'Content-Type': 'application/json',
          }
        }
      );

      // Set the advice based on the API response
      setAdvice(response.data.choices[0].message.content || 'No advice received.');
    } catch (error) {
      console.error('Error fetching advice:', error);
      setAdvice('There was an error analyzing your data. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <h1>Financial Advice Chat</h1>
      <button onClick={analyzeData} disabled={loading}>
        {loading ? 'Analyzing...' : 'Get Financial Advice'}
      </button>
      {advice && <p className="advice-text">{advice}</p>}
    </div>
  );
};

export default ChatGPTChat;
