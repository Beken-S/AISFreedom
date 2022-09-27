import express = require('express');

import { addProgramRequestController } from '../controllers';
// import { auth, admin } from '../middlewares';
import { validateAddProgramRequest } from '../validators';

const addProgramRequestRouter = express.Router();

addProgramRequestRouter.post(
  '/requests',
  ...validateAddProgramRequest.createRequest(),
  addProgramRequestController.create
);
addProgramRequestRouter.get(
  '/requests',
  // auth,
  // admin,
  ...validateAddProgramRequest.getAllRequest(),
  addProgramRequestController.getAll
);
addProgramRequestRouter.get(
  '/requests/filter',
  // auth,
  // admin,
  ...validateAddProgramRequest.filterRequest(),
  addProgramRequestController.filter
);
addProgramRequestRouter.get(
  '/requests/report',
  // auth,
  // admin,
  ...validateAddProgramRequest.reportRequest(),
  addProgramRequestController.report
);
addProgramRequestRouter.get(
  '/requests/:id',
  // auth,
  // admin,
  ...validateAddProgramRequest.getByIdRequest(),
  addProgramRequestController.getById
);
addProgramRequestRouter.patch(
  '/requests/:id/reject',
  // auth,
  // admin,
  ...validateAddProgramRequest.rejectRequest(),
  addProgramRequestController.reject
);
addProgramRequestRouter.patch(
  '/requests/:id/complete',
  // auth,
  // admin,
  ...validateAddProgramRequest.completeRequest(),
  addProgramRequestController.complete
);
addProgramRequestRouter.patch(
  '/requests/:id/reset',
  // auth,
  // admin,
  ...validateAddProgramRequest.resetRequest(),
  addProgramRequestController.reset
);

export default addProgramRequestRouter;
