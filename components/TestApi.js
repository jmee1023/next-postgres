"use client"
import React, { useState } from 'react';

const TestApi = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('/api/mock', {
        method: 'POST',
        body: message, // Just send the message string directly
        headers: {
          'Content-Type': 'text/plain', // Specify plain text content type
        },
      });
  
      const data = await response.json();
      console.log('Response:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="message">Message:</label>
      <input
        id="message"
        value={message}
        onChange={handleChange}
      />
      <button type="submit">Send request</button>
    </form>
  );
};

export default TestApi;