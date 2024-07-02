import { useState, useEffect } from "react";
import data from "../../global/data.json";

export const Card = () => {
  const [gamedata, setgame] = useState(null);

  useEffect(() => {
    setgame(data);
  }, []);

  return (
    <div className="game-card">
      <div className="card">
        {gamedata &&
          gamedata.map((gamedata) => (
            <div>
              {gamedata.tittle}
              {gamedata.price}
            </div>
          ))}
      </div>
    </div>
  );
};
