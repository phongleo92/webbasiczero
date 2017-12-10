// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');

// Get our API routes
const api = require('./server/routes/api');

const app = express();

// let postsCollection;

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

// Catch all other routes and return the index file
//test
// app.get('/test', (req, res) => {
//   postsCollection.find().toArray()
//   .then(result => {
//     res.send(result);
//   })
//   .catch(err => res.send(err.message));
// });

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
// const url = 'mongodb://phongleo92:phongdeptrai@ds119306.mlab.com:19306/shoppingzero';
//'mongodb://localhost:27017/shop';

// MongoClient.connect(url)
// .then(db => {
//     app.listen(port, () => console.log(`API running on host:${port}`));
//     postsCollection = db.collection('posts');
// })
// .catch(err => console.log(err.message));