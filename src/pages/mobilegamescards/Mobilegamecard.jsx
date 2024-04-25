import React from 'react';
import { Link } from 'react-router-dom';
import mobilegamedata from "../../global/mobilegamedata.json";

export const Mobilegamecard = () => {
  const handlePlayNow = (gameId) => {
   
    window.location.href = `/personal/${gameId}`;
  };

  return (
    <div className="main-mobilegames">
      <div className="container">
        <div className="mobile-games">
          <div id="games" className="mobile">Mobile games</div>

           
          {mobilegamedata.map((game, index) => (
            <div key={game.id} className="card-box">
              <div className="card">
                <div className={`mobile-image${index + 1}`}></div>  
                <div className="content">
                  <h4>{game.title}</h4>
                  <div className="progress-line"><span></span></div>
                  <div className="info">
                    <p>
                      pricing <br />
                      <span>{game.price}</span>
                    </p>
                   
                    <button className='playnowstyle' onClick={() => handlePlayNow(game.id)}>play now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
      <div className="container">
        <div className="more-flex">
          <div className="show-more">show more</div>
          <div></div>
        </div>
      </div>
    </div>
  );
}