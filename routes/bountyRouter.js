const uuid = require('uuid/v4')
const express = require('express')
const bountyRouter = express.Router();


// FAKE DATABASE  
let bounty = [
    {
        firstName: 'Rachel',
        lastName: 'Bruen',
        living: true,
        bountyAmount: 100,
        type: 'Sith',
        _id: uuid()
    },
    {
        firstName: 'Liz',
        lastName: 'Telm',
        living: true,
        bountyAmount: 1000,
        type: 'Jedi',
        _id: uuid()
    },
    {
        firstName: 'Croft',
        lastName: 'Crosh',
        living: true,
        bountyAmount: 920,
        type: 'Jedi',
        _id: uuid()
    },
    {
        firstName: 'Commi',
        lastName: 'Paz',
        living: true,
        bountyAmount: 560,
        type: 'Sith',
        _id: uuid()
    }
]

// GET ALL and POST
bountyRouter.route('/')
.get((req, res, next) => {
    res.status(200);
    res.send(bounty)
})
.post((req, res, next) => {
    const newBounty = req.body
    newBounty._id = uuid();
    bounty.push(newBounty)
    res.status(201)
    res.send(bounty)
})

// DELETE - delete one
bountyRouter.delete('/:_id', (req, res, next) => {
    const deleteBounty = bounty.find(bounty => bounty._id === req.params._id);
    const updateDB = bounty.filter(bounty => bounty._id !== deleteBounty._id);
    bounty = updateDB;
    res.status(200);
    res.send(bounty)
})

// GET ONE
bountyRouter.get('/:_id', (req, res, next) => {
    const getOne = bounty.find(bounty => bounty._id === req.params._id);
    res.status(200);
    res.send(getOne)
})

// PUT - UPDATE ONE
bountyRouter.put('/:_id', (req, res, next) => {
    const bountyUpdate = bounty.find(bounty => bounty._id === req.params._id);
    const updateBounty = Object.assign(bountyUpdate, req.body);
    const updateDB = bounty.map(bounty => bounty._id === updateBounty._id ? updateBounty : bounty);
    bounty = updateDB
    res.status(200);
    res.send(bounty);
})

module.exports = bountyRouter;