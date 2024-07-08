require("dotenv").config()

const PORT = process.env.PORT || 3001;
const express = require('express');

const app = express();


app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
})


