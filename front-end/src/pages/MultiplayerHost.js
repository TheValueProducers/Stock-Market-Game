import React, {useContext} from 'react';
import { GameContext } from '../context/gamecontext';
import "../assets/styles/multiplayer-host.css";
import NavBar from "../assets/components/navBar";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const MultiplayerHost = () => {
  const navigate = useNavigate();
  // const {setGameCode, setGameCreated} = useContext(GameContext)
  

  const createGame = async () => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/game/create",{}, { withCredentials: true });
      
      // If the request is successful (status code in the 2xx range)
      if (response.status === 200) {
        // setGameCode(response.data.game_code);
        // setGameCreated(true)
        navigate("/multiplayer/lobby");
      } else {
        console.error('Unexpected response:', response);
        alert("Game could not be created.");
      }
    } catch (err) {
      console.error('Error creating game:', err);
      alert("Game could not be created.");
    }
  };

  return (
    <>
      <NavBar />
      <section>
        <div className="game-mode">
          <h1>Multiplayer</h1>
          <button className="host-button" id="host" onClick={createGame}>
            Host
          </button>
        </div>
      </section>
    </>
  );
};

export default MultiplayerHost;