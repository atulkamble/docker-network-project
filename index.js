const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const MONGO_URL = 'mongodb://mongo:27017/networkdemo';

// Connect to MongoDB container
mongoose.connect(MONGO_URL)
  .then(() => console.log('Connected to MongoDB container'))
  .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Docker Network Project: Node.js connected to MongoDB container');
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
