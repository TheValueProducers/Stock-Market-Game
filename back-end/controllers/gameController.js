const { Game, Sequelize } = require("../models");
const Op = Sequelize.Op;
const generateRandomCode = require("../services/gameCode");

const createGame = async (req, res) => {
  try {
    // Fetch all active game codes
    const gameCodes = await Game.findAll({
      where: {
        status: "on_game"
      }
    }).then(games => games.map(game => game.game_code));

    let game_code = generateRandomCode();
    
    // Ensure the new game code is unique
    while (gameCodes.length !== 0 && gameCodes.includes(game_code)) {
      game_code = generateRandomCode();
    }

    // Create the new game
    const new_game = await Game.create({
      game_code,
      user_id: req.user.user_id,
      end_at: null,
      status: "waiting",
    });

    // Store the game_id in the session
    req.session.game_id = new_game.game_id;

    // Send response
    res.status(200).send({ game_id: new_game.game_id, game_code, message: "Game Created Successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).send({ message: "Internal Server Error" });
  }
};


const finishGame = async (req,res) => {
  await Game.update({
    status: "done"
  },
  {
    where: {
      game_id: req.session.game_id
    }
  })
}

module.exports = { createGame };