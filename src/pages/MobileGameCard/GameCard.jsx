import React, { useState, useEffect } from "react";
import mobilegamedata from "../../global/mobilegamedata.json";

export const GameCard = () => {
  const [mobiledata, setgame] = useState([]);

  useEffect(() => {
    setgame(mobilegamedata);
  }, []);

  return (
    <div className="game-card">
      <div className="card">
        {mobiledata.map((mobilegame) => (
          <div key={mobilegame.id}>
            <div>{mobilegame.title}</div>
            <div>{mobilegame.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
