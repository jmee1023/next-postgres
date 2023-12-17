"use client"
import React, { useState } from 'react';

const TestGet = () => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('/api/mock');
  
      const data = await response.json();
      console.log(response.status)
      console.log('Response:', data.Name);
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

export default TestGet;