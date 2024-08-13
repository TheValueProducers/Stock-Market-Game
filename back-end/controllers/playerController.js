const {Player} = require("../models")
const {Game} = require("../models")

const authenticatePlayer = async (req, res) => {
    try {
      const { game_code, username } = req.body;
      const game = await Game.findOne({ where: { game_code, status: "on_game" } });
      if (game) {
        const { game_id } = game;
        const new_player = await Player.create({
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

const clearPlayer = async (req,res) => {
  try{
    await Player.destroy({
      game_id: req.session.game_id
    })
    return res.status(200).send({message: "Successful Game Completion" });
  }catch(err){
    console.error(err);
    return res.status(500).send({message: "Internal Server Error"})
  }
}


  module.exports = {authenticatePlayer, clearPlayer}