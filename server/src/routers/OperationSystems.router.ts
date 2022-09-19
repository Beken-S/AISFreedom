import express = require('express');

import { operationSystemsController } from '../controllers';
import { auth, admin } from '../middlewares';
import { validateOperationSystem } from '../validators';

const operationSystemsRouter = express.Router();

operationSystemsRouter.post(
  '/operation_systems',
  auth,
  admin,
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
operationSystemsRouter.patch(
  '/operation_systems/:id',
  auth,
  admin,
  ...validateOperationSystem.updateRequest(),
  operationSystemsController.update
);
operationSystemsRouter.delete(
  '/operation_systems/:id',
  auth,
  admin,
  ...validateOperationSystem.destroyRequest(),
  operationSystemsController.destroy
);

export default operationSystemsRouter;
