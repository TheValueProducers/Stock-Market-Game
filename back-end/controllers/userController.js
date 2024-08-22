const bcrypt = require('bcrypt');
const { User, sequelize } = require('../models');
const {Op} = require("sequelize")

const checkUniqueUser = async (username, email) => {
  const existingUser = await User.findOne({
    where: {
      [Op.or]: [{ username }, { email }],
    },
  });
  console.log(existingUser);
  return existingUser === null;
};

async function registerUser(req, res) {
  try {
    const { username, password, email, full_name, date_of_birth } = req.body;
    
    const isUnique = await checkUniqueUser(username, email);
    if (!isUnique) {
      return res.status(400).json({ message: 'Username or email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ username, password: hashedPassword, email, role: 'user', full_name, date_of_birth });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'User registration failed', error: err.message });
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

const loginEndpoint = (req, res) => {
  res.status(200).json({ message: 'Successful Login' });
};

const userLogout = (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).send({ message: 'Failed to log out' });
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send({ message: 'Failed to destroy session' });
      }
      res.clearCookie('connect.sid');
      return res.status(200).send({ message: 'Logged out successfully' });
    });
  });
};

module.exports = { loginEndpoint, registerUser, authenticateUser, userLogout };