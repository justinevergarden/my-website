import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_CHARACTER } from '../graphql/queries';
import CharacterDetail from '../components/CharacterDetail';

const CharacterDetailPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_CHARACTER, { variables: { id } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="character-detail">
      <CharacterDetail character={data.character} />
    </div>
  );
};

export default CharacterDetailPage;