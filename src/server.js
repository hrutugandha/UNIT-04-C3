
const express = require('express');

const app = express();
const connect = require('./config/db')

const start = async() =>{
    await connect;
    app.listen(3000, ()=>{
        console.log('listening on port 3000');
    })
}
start();

module.exports = app;