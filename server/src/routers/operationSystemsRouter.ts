import express = require('express');

import { operationSystemsController } from '../controllers';

const operationSystemsRouter = express.Router();

operationSystemsRouter.post(
  '/operation_systems',
  operationSystemsController.create
);
operationSystemsRouter.get(
  '/operation_systems',
  operationSystemsController.getAll
);
operationSystemsRouter.get(
  '/operation_systems/:id',
  operationSystemsController.getById
);
operationSystemsRouter.put(
  '/operation_systems',
  operationSystemsController.update
);
operationSystemsRouter.delete(
  '/operation_systems/:id',
  operationSystemsController.destroy
);

export default operationSystemsRouter;
