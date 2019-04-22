const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose')

// PORT-SETUP
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

// Connect to MONGO DB
mongoose.connect('mongodb://localhost:27017/bounty-characters', {useNewUrlParser: true}, () => {
    console.log('Connected to DB')
})

// Routes
app.use('/bounty', require('./routes/bountyRouter'));

// ALL ERRORS THROWN
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: errmessage})
})

// PORT - LISTEN
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
