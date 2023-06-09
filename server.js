const {readdirSync} = require('fs');
const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(helmet());

// Router Middleware
readdirSync('./routes').map(r => app.use('/api/v1', require(`./routes/${r}`)));


// Server
const port = process.env.PORT || 8000;

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server Running on port ${port}`);
        })
    })
    .catch((err) => {
        console.log(err)
    });