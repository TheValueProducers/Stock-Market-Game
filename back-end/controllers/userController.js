const bcrypt = require('bcrypt');
const { User, sequelize } = require('../models');
const {Op} = require("sequelize");


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

const loginUser = (passport) => (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return next(err); // Pass the error to the next middleware (error handler)
    }
    if (!user) {
      return res.status(401).json({ message: info.message }); // Send an error response if authentication fails
    }
    req.logIn(user, (err) => {
      
      if (err) {
        return next(err); // Pass the error to the next middleware (error handler)
      }
      // Send a success response if login succeeds
      return res.status(200).json({ message: 'Successful Login', user: req.user });
    });
  })(req, res, next);
};



const userLogout = (req, res) => {
  console.log("Initiating logout process...");

  req.logout((err) => {
    if (err) {
      console.error("Error during logout:", err);
      return res.status(500).send({ message: 'Failed to log out' });
    }

    // Manually clear req.user to ensure the user is logged out
   

    // Destroy the session
    req.session.destroy((err) => {
      if (err) {
        console.error("Error during session destruction:", err);
        return res.status(500).send({ message: 'Failed to destroy session' });
      }

      // Clear the session cookie
      res.clearCookie('connect.sid', { path: '/' });

      console.log("Logout successful.");

      // Send the success message
      return res.status(200).send({ message: 'Logged out successfully' });
    });
  });
};
const authCheck = (req,res) => {
  console.log(`Req authenticated is: `, req.isAuthenticated());
  console.log(req.user);
  
  if (req.isAuthenticated()) {
    res.json({ isAuthenticated: true });
  } else {
    res.json({ isAuthenticated: false });
  }
}

module.exports = { registerUser, loginUser , userLogout, authCheck };