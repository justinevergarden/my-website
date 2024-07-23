import React, { useState } from 'react';

const CharacterDetail = ({ character }) => {
  const [locationName, setLocationName] = useState('');

  const handleAssignLocation = () => {
    // Implementasi untuk assign location
  };

  return (
    <div className="character-detail">
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <input
        type="text"
        value={locationName}
        onChange={(e) => setLocationName(e.target.value)}
        placeholder="Enter location name"
      />
      <button onClick={handleAssignLocation}>Assign Location</button>
    </div>
  );
};

export default CharacterDetail;