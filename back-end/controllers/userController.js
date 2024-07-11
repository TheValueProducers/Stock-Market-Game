const bcrypt = require("bcrypt")
const {User} = require("../models")
function loginEndpoint(req,res){
    res.status(200).json({message: "Successful Login"})
}

async function registerUser(req,res){
    
    try {
        const {username, password, email} = req.body;
        console.log(username, password, email);
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = await User.create({ username: username, password: hashedPassword, email, role: "user" });
        res.status(201).json({ message: 'User registered successfully' });
      } catch (err) {
        res.status(500).json({ message: 'User registration failed', error: err.message });
      }
}

module.exports = {loginEndpoint, registerUser}