const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = 5025;
const app = express();

// set up home route
app.get('/', (request, response) => {
  response.status(200).json({
    message: 'Welcome to Puddle Playgroup. An app for parents looking for inclement weather ideas and meetups',
  });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
