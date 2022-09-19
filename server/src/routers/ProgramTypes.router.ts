import express = require('express');

import { programTypesController } from '../controllers';
import { auth, admin } from '../middlewares';
import { validateProgramType } from '../validators';

const programTypesRouter = express.Router();

programTypesRouter.post(
  '/program/types',
  auth,
  admin,
  ...validateProgramType.createRequest(),
  programTypesController.create
);
programTypesRouter.get('/program/types', programTypesController.getAll);
programTypesRouter.get(
  '/program/types/:id',
  ...validateProgramType.getByIdRequest(),
  programTypesController.getById
);
programTypesRouter.patch(
  '/program/types/:id',
  auth,
  admin,
  ...validateProgramType.updateRequest(),
  programTypesController.update
);
programTypesRouter.delete(
  '/program/types/:id',
  auth,
  admin,
  ...validateProgramType.destroyRequest(),
  programTypesController.destroy
);

export default programTypesRouter;
