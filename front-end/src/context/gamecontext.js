import {createContext, useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export const GameContext = createContext();

export const GameProvider = ({children}) => {
    const [gameCode, setGameCode] = useState("");
    const [gameCreated, setGameCreated] = useState(false)
    const location = useLocation()


    const checkGame = async () => {
        try {
          const response = await axios.get("http://localhost:3001/api/v1/game/check-game", {withCredentials: true});
          setGameCode(response.data.game_code);
          setGameCreated(response.data.game_created);
        } catch (err) {
          console.error("Error checking game:", err);
          setGameCode(""); // Reset or handle state as needed
          setGameCreated(false); // Reset or handle state as needed
        }
      };
    useEffect(() => {
        checkGame();
    }, [location])

    return(
        <GameContext.Provider value={{gameCode, setGameCode, gameCreated, setGameCreated}}>
            {children}
        </GameContext.Provider>
    )
}