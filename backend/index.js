const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routers/AuthRouter'); // Ensure the correct path
require('dotenv').config();
require('./Models/db'); // Assuming this connects to your MongoDB

const PORT = process.env.PORT || 5000;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter); // All auth-related routes are prefixed with /auth

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
