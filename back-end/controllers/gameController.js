const { Game } = require("../models");
const generateRandomCode = require("../services/gameCode");

const createGame = async (req, res) => {
  try {
    const { difficulty, time_duration } = req.body;
    console.log(req.user);
    const game_code = generateRandomCode();
    const new_game = await Game.create({
      game_code,
      host: req.user.user_id,
      difficulty,
      time_duration,
      end_at: null,
      status: "waiting", 
    });
    res.status(200).send({ game_id: new_game.game_id, game_code, message: "Game Created Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { createGame };