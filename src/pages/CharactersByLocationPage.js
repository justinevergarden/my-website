import React, { useState } from 'react';

const CharactersByLocationPage = () => {
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="locations-page">
      <h1>Characters by Location</h1>
      <div className="location-list">
        {locations.map(location => (
          <div key={location.name} className="location-item" onClick={() => handleLocationClick(location)}>
            {location.name}
          </div>
        ))}
      </div>
      {selectedLocation && (
        <div className="location-details">
          <h2>{selectedLocation.name}</h2>
          <ul>
            {selectedLocation.characters.map(character => (
              <li key={character.id}>{character.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CharactersByLocationPage;