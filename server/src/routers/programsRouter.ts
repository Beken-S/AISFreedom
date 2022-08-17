import express = require('express');

import * as programsController from '../controllers/programsController';

const programsRouter = express.Router();

programsRouter.get('/', programsController.getAll);
programsRouter.get('/', programsController.get);
programsRouter.get('/search', programsController.search);

export { programsRouter };
