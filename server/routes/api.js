const express = require('express');
const router = express.Router();

const Posts = require('./db');

//DECLARE AXIOS FOR MAKING HTTP REQUESTS.
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

//GET ALL POSTS - Other
router.get('/otherapi', (req, res) => {
    //GET POST FROM THE MOCK API
    //THIS SHOULD IDEALLY BE REPLACED WITH SERVICE THAT CONNECT TO MONGODB
    axios.get(`${API}/posts`)
    .then(posts => {
        res.status(200).json(posts.data);
    })
    .catch(error => {
        res.status(500).send(error);
    });
});

//GET API LISTING
router.get('/', (req, res) => {
    res.send('api works');
});
router.get('/test', (req, res) => {
    Posts.find({})
    .then(posts => res.send(posts))
    .catch(err => res.send(err));
});

module.exports = router;
