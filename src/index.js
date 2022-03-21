

const express = require('express');
const mongoose = require('mongoose');
const server = require('./server')

const app = express();
const connect = require('./config/db')
const route = express.Router;

app.use(express.json());
const userController = require('./controllers/userController');
const bookController = require('./controllers/bookcontroller');
const publicationController = require('./controllers/publication.controller');
const commentsController = require('./controllers/comment.controller');

app.route('/user',userController);
app.route('/book',bookController);
app.route('/publication',publicationController);
app.route('/comments',commentsController);