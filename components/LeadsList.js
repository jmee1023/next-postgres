"use client"
import React, { useState, useEffect } from 'react';

function LeadsList() {
  const [leads, setLeads] = useState([]);

  const handleClickSearch = async () => {
    // Simulate search parameters based on static values for simplicity
    const petName = 'Fluffy'; // Replace with actual search input values
    const ownerName = 'John'; // Replace with actual search input values

    const response = await fetch(`/api/see-pets?petName=${petName}&ownerName=${ownerName}`);
    const data = await response.json();

    // Extract the actual pet data from the response object
    setLeads(data.pets.rows);
  };

  return (
    <div>
      <button onClick={handleClickSearch}>Search Pets</button>
      {leads.length > 0 && (
        <ul>
          {leads.map((lead) => (
            <li key={lead.email}>
              {lead.first_name} - {lead.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LeadsList;