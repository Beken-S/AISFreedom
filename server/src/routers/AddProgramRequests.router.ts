import express = require('express');

import { addProgramRequestController } from '../controllers';
import { validateAddProgramRequest } from '../validators';

const addProgramRequestRouter = express.Router();

addProgramRequestRouter.post(
  '/requests',
  ...validateAddProgramRequest.createRequest(),
  addProgramRequestController.create
);
addProgramRequestRouter.get(
  '/requests',
  ...validateAddProgramRequest.getAllRequest(),
  addProgramRequestController.getAll
);
addProgramRequestRouter.get(
  '/requests/filter',
  ...validateAddProgramRequest.filterRequest(),
  addProgramRequestController.filter
);
addProgramRequestRouter.get(
  '/requests/:id',
  ...validateAddProgramRequest.getByIdRequest(),
  addProgramRequestController.getById
);
addProgramRequestRouter.put(
  '/requests/:id/reject',
  ...validateAddProgramRequest.rejectRequest(),
  addProgramRequestController.reject
);
addProgramRequestRouter.put(
  '/requests/:id/complete',
  ...validateAddProgramRequest.completeRequest(),
  addProgramRequestController.complete
);
addProgramRequestRouter.put(
  '/requests/:id/reset',
  ...validateAddProgramRequest.resetRequest(),
  addProgramRequestController.reset
);

export default addProgramRequestRouter;
