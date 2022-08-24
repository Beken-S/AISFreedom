import express = require('express');

import { operationSystemsController } from '../controllers';

const operationSystemsRouter = express.Router();

operationSystemsRouter.post('/os', operationSystemsController.create);
operationSystemsRouter.get('/os', operationSystemsController.getAll);
operationSystemsRouter.get('/os/:id', operationSystemsController.getById);
operationSystemsRouter.put('/os', operationSystemsController.update);
operationSystemsRouter.delete('/os/:id', operationSystemsController.destroy);

export default operationSystemsRouter;
