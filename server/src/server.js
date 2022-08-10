const express = require('express');

const { PORT } = require('./config');
const { pingController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/ping', pingController);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
