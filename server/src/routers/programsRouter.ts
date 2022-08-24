import express = require('express');

import { programsController } from '../controllers';

const programsRouter = express.Router();

programsRouter.post('/programs', programsController.create);
programsRouter.get('/programs', programsController.getAll);
programsRouter.get('/programs/search', programsController.search);
programsRouter.get('/programs/:id', programsController.getById);
programsRouter.put('/programs', programsController.update);
programsRouter.delete('/programs/:id', programsController.destroy);

export default programsRouter;
