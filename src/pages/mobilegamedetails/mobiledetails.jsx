import React from "react";
import { useParams } from "react-router-dom";
import mobilegamedata from "../../global/mobilegamedata.json";

console.log(mobilegamedata);
export const MobileDetails = () => {
  const { mobilegameId } = useParams();
  const mobilegame = mobilegamedata.find(
    (mobilegame) => mobilegame.id === parseInt(mobilegameId)
  );

  if (!mobilegame) {
    return <div>ASDASDA</div>;
  }

  console.log(mobilegame);

  return (
    <div className="D-container">
      <h1 className="D-gametitle">{mobilegame.title}</h1>
      <p className="D-requirements">{mobilegame.requirements}</p>
      <p className="D-details">{mobilegame.detail}</p>
      <p className="D-gameprice">
        Price: <span className="D-span-price">${mobilegame.price}</span>
      </p>
      <button className="D-download">DOWNLOAD NOW</button>
    </div>
  );
};
