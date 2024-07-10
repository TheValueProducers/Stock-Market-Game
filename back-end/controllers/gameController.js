const { Game, Player } = require("../models");
const generateRandomCode = require("../services/gameCode");

export const createGame = async (req, res) => {
  try {
    const { host, difficulty, time_duration } = req.body;
    const game_code = generateRandomCode();
    const new_game = await Game.create({
      game_code,
      host_id: req.user.id,
      time_duration,
      end_at: null,
      status: "waiting", 
    });
    res.status(200).send({ game_code, message: "Game Created Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

export const authenticatePlayer = async (req, res) => {
  try {
    const { game_code, username } = req.body;
    const game = await Game.findOne({ where: { game_code, status: "waiting" } });
    if (game) {
      const { game_id } = game;
      const new_player = await Player.create({
        player_id: req.user.id, 
        username,
        game_id,
      });
      return res.status(200).send({ game_id, message: "Successful Player Authentication" });
    }
    res.status(401).send({ message: "Wrong Code Entered" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};