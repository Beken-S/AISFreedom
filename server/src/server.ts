import express = require('express');

import config from './config';
import { pingController } from './controllers';
import {
  errorHandler,
  logErrors,
  logRequests,
  security,
  validationErrorHandler,
} from './middlewares';
import { Database, initDatabase } from './models';
import {
  licensesRouter,
  operationSystemsRouter,
  programsRouter,
  programTypesRouter,
  sourcesRouter,
} from './routers';

const app = express();

const start = async () => {
  try {
    await Database.authenticate();
    await initDatabase(Database);
    app.listen(config.server.port, () => {
      console.log(`Server started on port ${config.server.port}.`);
    });
  } catch (err) {
    console.log(err);
  }
};

security(app);

app.use(express.json());

logRequests(app);

app.get('/ping', pingController.ping);
app.use('/api', programsRouter);
app.use('/api', programTypesRouter);
app.use('/api', operationSystemsRouter);
app.use('/api', licensesRouter);
app.use('/api', sourcesRouter);

logErrors(app);

app.use(validationErrorHandler);
app.use(errorHandler);

start();
