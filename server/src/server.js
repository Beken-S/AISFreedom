const express = require('express');

const { port, dbConfig, isWriteLogs } = require('./config');
const pingController = require('./controllers/pingController');
const { addConnection } = require('./middlewares/addConnection');
const { logRequests } = require('./middlewares/logRequests');
const { createConnection } = require('./services/createConnection');

const app = express();
const connection = createConnection(dbConfig);

app.use(addConnection(connection));

app.use(express.json());

app.use(logRequests());
app.use(logRequests(isWriteLogs));

app.get('/ping', pingController.ping);

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
