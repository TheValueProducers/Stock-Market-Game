import React from 'react';
import "../assets/styles/multiplayer-host.css";
import NavBar from "../assets/components/navBar"
const MultiplayerHost = () => {
  
  return (
    <>
        <NavBar />
        <section>
        <div className="game-mode">
            <h1>Multiplayer</h1>
            <button className="host-button" id="host" >
            Host
            </button>
        </div>
        </section>
    </>
  );
};

export default MultiplayerHost;