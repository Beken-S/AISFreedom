import path = require('path');

import express = require('express');

import { programsController } from '../controllers';

const programsRouter = express.Router();

programsRouter.use(
  '/programs/logos',
  express.static(path.resolve(__dirname, '../../db/logos'))
);
programsRouter.use(
  '/programs/images',
  express.static(path.resolve(__dirname, '../../db/images'))
);

programsRouter.post('/programs', programsController.create);
programsRouter.get('/programs', programsController.getAll);
programsRouter.get('/programs/search', programsController.search);
programsRouter.get('/programs/:id', programsController.getById);
programsRouter.put('/programs', programsController.update);
programsRouter.delete('/programs/:id', programsController.destroy);
programsRouter.post('/programs/images', programsController.saveImages);

export default programsRouter;
