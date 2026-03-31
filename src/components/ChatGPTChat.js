import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ChatGPTChat.css';

const ChatGPTChat = () => {
  const [localData, setLocalData] = useState({});
  const [advice, setAdvice] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedProfile = localStorage.getItem('profileFormData');
    const savedSubscriptions = localStorage.getItem('subscriptions');

    const profile = savedProfile ? JSON.parse(savedProfile) : {};
    const subscriptions = savedSubscriptions ? JSON.parse(savedSubscriptions) : [];

    const flagged = subscriptions.filter((s) => s.flagged).map((s) => s.name);

    setLocalData({ profile, subscriptions, flaggedForReview: flagged });
  }, []);

  const analyzeData = async () => {
    const { subscriptions = [] } = localData;

    if (subscriptions.length === 0) {
      alert('No subscriptions found. Add some subscriptions first.');
      return;
    }

    setLoading(true);
    try {
      const totalMonthly = subscriptions.reduce((t, s) => {
        return t + (s.frequency === 'yearly' ? s.cost / 12 : s.cost);
      }, 0);

      const profileSummary = Object.keys(localData.profile || {}).length > 0
        ? `User profile: ${JSON.stringify(localData.profile)}.`
        : '';

      const flaggedSummary = localData.flaggedForReview?.length > 0
        ? `The user is reconsidering cancelling: ${localData.flaggedForReview.join(', ')}.`
        : '';

      const subList = subscriptions
        .map((s) => `${s.name} ($${s.cost}/${s.frequency}, ${s.category})`)
        .join('; ');

      const prompt = `You are a financial advisor helping someone manage their subscriptions. ${profileSummary} They spend $${totalMonthly.toFixed(2)}/month across ${subscriptions.length} subscriptions: ${subList}. ${flaggedSummary} Give concise, specific advice on optimizing their spending — what to cut, bundle, or keep. Keep it to 3-4 sentences.`;

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini-2024-07-18',
          messages: [
            { role: 'system', content: 'You are a concise financial advisor specializing in subscription optimization.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 250,
          temperature: 0.7,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          }
        }
      );

      setAdvice(response.data.choices[0].message.content || 'No advice received.');
    } catch (error) {
      console.error('Error fetching advice:', error);
      setAdvice('There was an error connecting to the advisor. Please check your API key and try again.');
    }
    setLoading(false);
  };

  return (
    <div className="chat-container">
      <h1>Financial Advisor</h1>
      <p className="chat-subtitle">
        Get personalized advice based on your subscriptions
        {localData.flaggedForReview?.length > 0 && ` and ${localData.flaggedForReview.length} flagged for review`}.
      </p>
      <button onClick={analyzeData} disabled={loading}>
        {loading ? 'Analyzing...' : 'Get Advice'}
      </button>
      {advice && <p className="advice-text">{advice}</p>}
    </div>
  );
};

export default ChatGPTChat;
