const express = require('express');

const { port, db, logs } = require('./config');
const pingController = require('./controllers/pingController');
const { addConnection } = require('./middlewares/addConnection');
const { errorHandler } = require('./middlewares/errorHandler');
const { logErrors } = require('./middlewares/logErrors');
const { logRequests } = require('./middlewares/logRequests');
const { security } = require('./middlewares/security');
const { createConnection } = require('./services/createConnection');

const app = express();
const connection = createConnection(db);

security(app);

app.use(addConnection(connection));

app.use(express.json());

app.use(logRequests());
app.use(logRequests(logs.write));

app.get('/ping', pingController.ping);

app.use(logErrors());
app.use(logErrors(logs.write));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server started on port ${port}.`);
});
