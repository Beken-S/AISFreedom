import cookieParser = require('cookie-parser');
import express = require('express');
import fileUpload from 'express-fileupload';

import config from './config';
import { pingController } from './controllers';
import database, { initDatabase } from './database';
import { errorHandler, logErrors, logRequests, security } from './middlewares';
import {
  addProgramRequestRouter,
  articleRouter,
  departmentRouter,
  licensesRouter,
  operationSystemsRouter,
  programsRouter,
  programTypesRouter,
  sourcesRouter,
  normativeDocumentRouter,
  usersRouter,
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
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: config.server.temp,
  })
);

logRequests(app);

app.get('/ping', pingController.ping);
app.use('/api', usersRouter);
app.use('/api', programsRouter);
app.use('/api', programTypesRouter);
app.use('/api', operationSystemsRouter);
app.use('/api', licensesRouter);
app.use('/api', sourcesRouter);
app.use('/api', departmentRouter);
app.use('/api', addProgramRequestRouter);
app.use('/api', normativeDocumentRouter);
app.use('/api', articleRouter);

logErrors(app);

app.use(errorHandler);

start();
