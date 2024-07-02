import React from "react";
import mobilegamedata from "../../global/mobilegamedata.json";
import { useNavigate } from "react-router-dom";

export const Mobilegamecard = () => {
  const navigate = useNavigate();

  const handleplay = (mobileId) => {
    navigate(`/mobilegames/${mobileId}`);
  };

  return (
    <div className="main-mobilegames">
      <div className="container">
        <div className="mobile-games">
          <div id="mobilegame" className="mobile">
            Mobile Games
          </div>
          {mobilegamedata.map((mobilegame, index) => (
            <div key={mobilegame.id} className="card-box">
              <div className="card">
                <div className={`mobile-image${index + 1}`}></div>
                <div className="content">
                  <h4>{mobilegame.title}</h4>
                  <div className="progress-line">
                    <span></span>
                  </div>
                  <div className="info">
                    <p>
                      Pricing <br />
                      <span>{mobilegame.price}$</span>
                    </p>
                    <button
                      className="playnowstyle"
                      onClick={() => handleplay(mobilegame.id)}
                    >
                      Play Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="more-flex">
          <div className="show-more">Show More</div>
        </div>
      </div>
    </div>
  );
};
