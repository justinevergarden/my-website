import React from 'react';
import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  return (
    <Link to={`/character/${character.id}`}>
      <div className="character-card">
        <img src={character.image} alt={character.name} />
        <h3>{character.name}</h3>
      </div>
    </Link>
  );
};

export default CharacterCard;