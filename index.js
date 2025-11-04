const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;
// Database
const DB = require('./database/userDB');
DB();

app.use(express.json());


// Routes
app.use('/api/users', require('./routes/goalRoutes'));



// SERVER
app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`)
})