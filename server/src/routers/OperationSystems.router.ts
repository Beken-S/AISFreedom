import express = require('express');

import { operationSystemsController } from '../controllers';
import { validateOperationSystem } from '../validators';

const operationSystemsRouter = express.Router();

operationSystemsRouter.post(
  '/operation_systems',
  ...validateOperationSystem.createRequest(),
  operationSystemsController.create
);
operationSystemsRouter.get(
  '/operation_systems',
  operationSystemsController.getAll
);
operationSystemsRouter.get(
  '/operation_systems/:id',
  ...validateOperationSystem.getByIdRequest(),
  operationSystemsController.getById
);
operationSystemsRouter.put(
  '/operation_systems/:id',
  ...validateOperationSystem.updateRequest(),
  operationSystemsController.update
);
operationSystemsRouter.delete(
  '/operation_systems/:id',
  ...validateOperationSystem.destroyRequest(),
  operationSystemsController.destroy
);

export default operationSystemsRouter;