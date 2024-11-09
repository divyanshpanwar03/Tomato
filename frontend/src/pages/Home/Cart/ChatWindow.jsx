import React, { useState } from 'react';

const ChatWindow = ({ cartItems, foodList, onClose }) => {
  const [geminiResponse, setGeminiResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSuggestDishes = async () => {
    setLoading(true);
    
    // Prepare the prompt with selected dishes
    const selectedDishes = foodList
      .filter(item => cartItems[item._id] > 0)
      .map(item => item.name)
      .join(', ');

    // Simulate API call to your Gemini Flash Model
    try {
      const response = await fetch('/api/gemini-suggest-dishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ dishes: selectedDishes })
      });
      const data = await response.json();
      setGeminiResponse(data.suggestion || 'No suggestion available.');
    } catch (error) {
      setGeminiResponse('Error fetching suggestion.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '200px',
      right: '50px',
      width: '500px',
      height:'400px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      zIndex: 1
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        backgroundColor: 'Tomato',
        color: '#fff'
      }}>
        <h3 style={{ margin: 0 }}>AI Assistant</h3>
        <button onClick={onClose} style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer'
        }}>X</button>
      </div>
      <div style={{
        padding: '10px',
        fontSize: '14px',
        color: '#333'
      }}>
        <button onClick={handleSuggestDishes} style={{
          display: 'block',
          width: '100%',
          padding: '8px',
          backgroundColor: 'grey',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '10px'
        }}>Suggest me dishes to accompany my meal</button>
        {loading && <p>Loading...</p>}
        {geminiResponse && <p>{geminiResponse}</p>}
      </div>
    </div>
  );
};

export default ChatWindow;
