const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 5000;

mongoose.connect('mongodb://mongodb:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Hello World from Express');
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
