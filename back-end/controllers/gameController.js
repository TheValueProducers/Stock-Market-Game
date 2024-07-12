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
    res.status(200).send({ game_code, message: "Game Created Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const sendGame = (req,res) => {
    res.status(200).send({message: "Game joined successfully"})
}

const startGame = async (req, res) => {
    try {
      const game = await Game.findOne({ where: { host_id: req.user.user_id } });
      if (!game) {
        return res.status(401).json({ message: "Unauthorized" });
      }
      await game.update({ status: "running" });
      return res.status(200).json({ message: "Game started successfully" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };




module.exports = {createGame, sendGame, startGame}

