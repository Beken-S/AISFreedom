import express = require('express');

import { programTypesController } from '../controllers';
import { validateProgramType } from '../validators';

const programTypesRouter = express.Router();

programTypesRouter.post(
  '/program/types',
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
  ...validateProgramType.updateRequest(),
  programTypesController.update
);
programTypesRouter.delete(
  '/program/types/:id',
  ...validateProgramType.destroyRequest(),
  programTypesController.destroy
);

export default programTypesRouter;
