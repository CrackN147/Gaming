import React from "react";
import { useParams } from "react-router-dom";
import gamedata from "../../global/gamedata.json";

console.log(gamedata);

export const GameDetails = () => {
  const { gameId } = useParams();
  const game = gamedata.find((game) => game.id === parseInt(gameId));

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="D-container">
      <h1 className="D-gametittle"> {game.tittle}</h1>
      <p className="D-requarments"> {game.requarments} </p>
      <p className="D-details"> {game.detail}</p>
      <p className="D-gameprice">
        Price: <span className="D-span-price"> $ </span> {game.price}{" "}
      </p>
      <button className="D-download"> DOWNLOAD NOW</button>
    </div>
  );
};
