import React from 'react';
import gamedata from "../../global/gamedata.json";

export const Homepagecard = () => {


  const handlePlayNow = (gameId) => {
    
    window.location.href = `/personal/${gameId}`;
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
                  <h4>{game.title}</h4>
                  <div className="progress-line"><span></span></div>
                  <div className="info">
                    <p>
                      pricing <br />
                      <span>{game.price}$</span>
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
    </div >
  );
}