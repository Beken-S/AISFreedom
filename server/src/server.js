const express = require('express');

const { PORT, WRITE_LOG } = require('./config');
const { pingController } = require('./controllers');
const { requestsLogs } = require('./middlewares');

const app = express();

app.use(express.json());

app.use(requestsLogs());
app.use(requestsLogs(WRITE_LOG));

app.get('/ping', pingController);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}.`);
});
