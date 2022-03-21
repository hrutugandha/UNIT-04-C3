const express = require('express')

const Book = require('./models/book.model');
const app = express()

app.post('/', async(req, res) => {
    try{
        const book = await book.create(req.body);

        return res.status(201).send({book:book});
    }catch(err){
        return res.status(500).send({message: "Something went wrong!"});
    }
})
module.exports = app;