const express = require('express');
// const db = require('./config/connection');
// const routes = require('./routes');

// const cwd = process.cwd();

const PORT = 3001;
const app = express();

// set up home route
app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Welcome to Puddle Playgroup. An app for parntes looking for incliment weather ideas and meetups',
  });
});
app.listen(PORT, (request, respond) => {
  console.log(`Our server is live on ${PORT}. Yay!`);
});


// const activity = cwd.includes('18Challenge')
//   ? cwd.split('/18Challenge/')[1]
//   : cwd;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => {
//     console.log(`API server for ${activity} running on port ${PORT}!`);
//   });
// });
