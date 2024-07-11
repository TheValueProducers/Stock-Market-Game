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

const authenticateUser = (passport) => (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: info.message });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      next();
    });
  })(req, res, next);
};

module.exports = { authenticateUser };
  
module.exports = { checkAuthenticated, checkNotAuthenticated, checkGameAuthenticated, authenticateUser };