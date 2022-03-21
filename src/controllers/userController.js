const express = require('express')

const app = express()

const User = require('./models/user.model');

app.post('/', async(req, res) => {
    try{
        const user = await User.create(req.body);;

        return res.status(201).send({user: user});
    }catch(err){
        return res.status(500).send({message: "Something went wrong!"});
    }
});

module.exports = app;