// components/CsvUploadForm.js
"use client"
import React, { useState } from 'react';

const CsvUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      console.error('Please select a CSV file to upload');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload-csv', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Data uploaded successfully:', data.message);
        // Show success message to user
      } else {
        console.error('Error uploading data:', data.error);
        // Show error message to user
      }
    } catch (error) {
      console.error('Error sending request:', error);
    } finally {
      setFile(null); // Clear file selection after upload
    }
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="file">Select your CSV file:</label>
      <input
        type="file"
        id="file"
        name="file"
        accept=".csv"
        required
        onChange={handleChange}
      />
      <button type="submit">Upload CSV</button>
    </form>
  );
};

export default CsvUploadForm;