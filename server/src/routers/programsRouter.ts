import express = require('express');

import * as programsController from '../controllers/programsController';

const programsRouter = express.Router();

programsRouter.get('/', programsController.getAll);
programsRouter.get('/?', programsController.get);

export { programsRouter };
