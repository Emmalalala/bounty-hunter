const uuid = require('uuid/v4')
const express = require('express')
const bountyRouter = express.Router();
const Bounty = require('../models/bounty.js') 

// GET ALL and POST
bountyRouter.route('/')
.get((req, res, next) => {
   Bounty.find((err, bounty) => {
       if(err){
           res.status(500);
           return next(err)
       }
       return res.status(200).send(bounty)
   })
})
.post((req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, newSavedBounty) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newSavedBounty)
    })
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