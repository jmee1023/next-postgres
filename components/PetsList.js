"use client"
import React, { useState, useEffect } from 'react';

function PetsList() {
  const [pets, setPets] = useState([]);

  const handleClickSearch = async () => {
    // Simulate search parameters based on static values for simplicity
    const petName = 'Fluffy'; // Replace with actual search input values
    const ownerName = 'John'; // Replace with actual search input values

    const response = await fetch(`/api/see-pets?petName=${petName}&ownerName=${ownerName}`);
    const data = await response.json();

    // Extract the actual pet data from the response object
    setPets(data.pets.rows);
  };

  return (
    <div>
      <button onClick={handleClickSearch}>Search Pets</button>
      {pets.length > 0 && (
        <ul>
          {pets.map((pet) => (
            <li key={pet.name}>
              {pet.name} - {pet.owner}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PetsList;