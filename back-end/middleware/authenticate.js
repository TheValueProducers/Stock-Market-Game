const { HostNotFoundError } = require("sequelize");
const {Game} = require("../models");

function checkAuthenticated(req, res, next) {
  console.log('Checking if authenticated:', req.isAuthenticated());
  console.log('Session:', req.session);
  console.log('User:', req.user);

    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401).send({message: "Unauthorized"})
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.status(401).send({message: "Unauthorized"})
    }
    next();
}

async function checkUniqueUser(req,res,next){
  const {username, password, email} = req.body;
  
}

async function checkGameAuthenticated(req, res, next) {
  try {
    const gameId = req.headers['game-id'] || req.query.game_id || req.body.game_id;
    if (!gameId) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const game = await Game.findByPk(gameId);
    if (!game) {
      return res.status(401).json({ message: 'Invalid game ID' });
    }

    if (game.status !== "waiting"){
      return res.status(401).json({message: "Game is running. Can not join."})
    }

    req.game = game;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

const checkHost = async (req, res, next) => {
  try {
    const { game_id } = req.params;
    const game = await Game.findOne({ where: { host_id: req.user.user_id } });

    if (!game) {
      return res.status(404).json({ message: "Game not found" });
    }

    if (game.game_id !== game_id) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



  
module.exports = { checkAuthenticated, checkNotAuthenticated, checkGameAuthenticated, checkHost};