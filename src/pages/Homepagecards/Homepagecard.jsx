import React from 'react';
import gamedata from '../../global/gamedata.json';
import { useNavigate } from 'react-router-dom';

 export const Homepagecard = () => {
  const navigate = useNavigate();

  const handlePlayNow = (gameId) => {
    navigate(`/personal/${gameId}`);
  };

  return (
    <div className="main-homepage">
      <div className="container">
        <div className="games">
          <div id="games" className="popular-games">popular games</div>
          {gamedata.map((game, index) => (
            <div key={index} className="card-box">
              <div className="card">
                <div className={`card-image${index + 1}`}></div>
                <div className="content">
                  <h4>{game.tittle}</h4>
                  <div className="progress-line"><span></span></div>
                  <div className="info">
                    <p>
                      Pricing <br />
                      <span>{game.price}$</span>
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
        </div>
      </div>
    </div>
  );
};