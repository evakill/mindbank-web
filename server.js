import mongoose from 'mongoose';
var express = require(‘express’)
var app = express();

let Message = require('../models/Message');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

app.get('/members', (req, res) => {

});

app.get('/board', (req, res) => {

});

app.get('/projects', (req, res) => {

});

app.get('/researchProjects', (req, res) => {

});

app.post('/contact', (req, res) => {
    
});

app.listen(8000);
