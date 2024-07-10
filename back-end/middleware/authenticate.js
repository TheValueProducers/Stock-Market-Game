function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/home');
    }
    next();
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

    req.game = game;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
  
module.exports = { checkAuthenticated, checkNotAuthenticated, checkGameAuthenticated };