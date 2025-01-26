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
    const savedData = localStorage.getItem('profileFormData');
    if (!savedData) {
        alert('No data found in localStorage!');
        return;
    }
    const localData = JSON.parse(savedData);

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8000/api/chat', {
        userMessage: 'Provide financial advice based on my subscription data.',
        userData: localData,
      });
      setAdvice(response.data.reply || 'No advice received.');
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
