import React from 'react';
import { useParams } from 'react-router-dom';
import mobilegamedata from '../../global/gamedata.json';

 export const Mobileditails = () => {
  const { mobilegameId } = useParams();
  const mobilegame = mobilegamedata.find(mobilegame => mobilegame.id === parseInt(mobilegameid));

  if (!mobilegame) {
    return <div>Game not found</div>;
  }

  return (
    <div>
      <h1>{game.tittle}</h1>
      <p>Price: ${game.price}</p>
      {/* Add more game details here */}
    </div>
  );
};
