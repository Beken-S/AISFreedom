import express = require('express');

import { config } from './config';
import * as pingController from './controllers/pingController';
import { addConnection } from './middlewares/addConnection';
import { errorHandler } from './middlewares/errorHandler';
import { logErrors } from './middlewares/logErrors';
import { logRequests } from './middlewares/logRequests';
import { security } from './middlewares/security';
import { createConnection } from './services/createConnection';

const app = express();
const connection = createConnection(config.database);

security(app);

app.use(addConnection(connection));

app.use(express.json());
app.use(logRequests());
app.use(logRequests(config.logs.write));

app.get('/ping', pingController.ping);

app.use(logErrors());
app.use(logErrors(config.logs.write));
app.use(errorHandler);

app.listen(config.server.port, () => {
  console.log(`Server started on port ${config.server.port}.`);
});
