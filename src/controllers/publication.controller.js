const express = require('express')

const app = express()

const Publication = require('./models/publication.model');

app.get('/', async(req, res) => {
    try{
        const publication = await Publication.find({});

        return res.status(201).send({publication: publication});
    }catch(err){
        return res.status(500).send({message: "Something went wrong!"});
    }
})
module.exports = app;