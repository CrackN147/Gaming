// src/components/Mobilegamecard.js
import React from 'react';
import mobilegamedata from '../../global/mobilegamedata.json';
import { useNavigate } from 'react-router-dom';

export const Mobilegamecard = () => {
  const navigate = useNavigate();

  const handlePlayNow = (gameId) => {
    navigate(`/personal/${gameId}`);
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
                      Pricing <br />
                      <span>{game.price}</span>
                    </p>
                    <button className='playnowstyle' onClick={() => handlePlayNow(game.id)}>Play Now</button>
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
          <div></div>
        </div>
      </div>
    </div>
  );
};