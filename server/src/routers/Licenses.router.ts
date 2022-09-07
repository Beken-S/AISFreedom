import express = require('express');

import { licensesController } from '../controllers';
import { validateLicense } from '../validators';

const licensesRouter = express.Router();

licensesRouter.post(
  '/licenses',
  ...validateLicense.createRequest(),
  licensesController.create
);
licensesRouter.get(
  '/licenses',
  ...validateLicense.getAllRequest(),
  licensesController.getAll
);
licensesRouter.get(
  '/licenses/:id',
  ...validateLicense.getByIdRequest(),
  licensesController.getById
);
licensesRouter.put(
  '/licenses/:id',
  ...validateLicense.updateRequest(),
  licensesController.update
);
licensesRouter.delete(
  '/licenses/:id',
  ...validateLicense.destroyRequest(),
  licensesController.destroy
);

export default licensesRouter;
