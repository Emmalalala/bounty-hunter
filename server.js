const express = require('express');
const app = express();
const morgan = require('morgan');

// PORT-SETUP
const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(express.json())
app.use(morgan('dev'))

app.use('/bounty', require('./routes/bountyRouter'));

// let { bounty } = require('./routes/bountyRouter')
// app.get('/bounty',(req, res) => {
//     res.send(bounty)
// })

// PORT - LISTEN
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
