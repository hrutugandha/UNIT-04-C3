const express = require('express')

const app = express()

const Comment = require('./models/comment.model')

app.get('/', async(req, res) => {
    try{
        const comment = await Comment.create(req.body);

        return res.status(201).send({comment:comment});
    }catch(err){
        return res.status(500).send({message: "Something went wrong!"});
    }
})
module.exports = app;