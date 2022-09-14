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
  '/requests/report',
  ...validateAddProgramRequest.reportRequest(),
  addProgramRequestController.report
);
addProgramRequestRouter.get(
  '/requests/:id',
  ...validateAddProgramRequest.getByIdRequest(),
  addProgramRequestController.getById
);
addProgramRequestRouter.patch(
  '/requests/:id/reject',
  ...validateAddProgramRequest.rejectRequest(),
  addProgramRequestController.reject
);
addProgramRequestRouter.patch(
  '/requests/:id/complete',
  ...validateAddProgramRequest.completeRequest(),
  addProgramRequestController.complete
);
addProgramRequestRouter.patch(
  '/requests/:id/reset',
  ...validateAddProgramRequest.resetRequest(),
  addProgramRequestController.reset
);

export default addProgramRequestRouter;
