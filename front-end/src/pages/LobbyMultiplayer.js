import React, {useContext} from 'react';
import '../assets/styles/lobby.css';
import axios from 'axios';
import { GameContext } from '../context/gamecontext';

const LobbyMultiplayer = () => {
  const {gameCode} = useContext(GameContext);
  return (
    <div>
      <div className="game-pin">
        <div className="top-pin">
          <p className='join-game'>
            Join the game at - <span>BVIS-SMG.COM</span>
          </p>
          <div className="pin">
            <div className="with-game-pin">With Game PIN</div>
            <div className="code">{gameCode}</div>
          </div>
        </div>
        <button className="start">Start</button>
        <div className="player-number">
          <div className="number">8</div>
          <div className="player">Players</div>
        </div>
      </div>
      <div className="container">
        <div className="name">Binh</div>
        <div className="name">Phat</div>
        <div className="name">Duong</div>
        <div className="name">Danh</div>
        <div className="name">Duy</div>
        <div className="name">Do Le Tuan...</div>
        <div className="name">Bao</div>
        <div className="name">Duc</div>
      </div>
    </div>
  );
};

export default LobbyMultiplayer;