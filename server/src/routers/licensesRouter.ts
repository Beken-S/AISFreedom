import express = require('express');

import { licensesController } from '../controllers';

const licensesRouter = express.Router();

licensesRouter.post('/license', licensesController.create);
licensesRouter.get('/license', licensesController.getAll);
licensesRouter.get('/license/:id', licensesController.getById);
licensesRouter.put('/license', licensesController.update);
licensesRouter.delete('/license/:id', licensesController.destroy);

export default licensesRouter;
