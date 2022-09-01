import express = require('express');
import fileUpload from 'express-fileupload';

import config from './config';
// import { pingController } from './controllers';
import database, { initDatabase } from './database';
import {
  errorHandler,
  logErrors,
  logRequests,
  security,
  validationErrorHandler,
} from './middlewares';
import {
  licensesRouter,
  operationSystemsRouter,
  programsRouter,
  programTypesRouter,
  sourcesRouter,
} from './routers';
import { clearTemp } from './utils';

const app = express();

const start = async () => {
  try {
    await database.authenticate();
    await initDatabase(database);
    app.listen(config.server.port, () => {
      console.log(`Server started on port ${config.server.port}.`);
    });
    clearTemp.start();
  } catch (err) {
    console.log(err);
  }
};

security(app);

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: config.database.filesPath.temp,
  })
);
logRequests(app);

// app.get('/ping', pingController.ping);
app.use('/api', programsRouter);
app.use('/api', programTypesRouter);
app.use('/api', operationSystemsRouter);
app.use('/api', licensesRouter);
app.use('/api', sourcesRouter);

logErrors(app);

app.use(validationErrorHandler);
app.use(errorHandler);

start();
