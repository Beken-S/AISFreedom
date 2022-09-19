import express = require('express');

import { licensesController } from '../controllers';
import { auth, admin } from '../middlewares';
import { validateLicense } from '../validators';

const licensesRouter = express.Router();

licensesRouter.post(
  '/licenses',
  auth,
  admin,
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
licensesRouter.patch(
  '/licenses/:id',
  auth,
  admin,
  ...validateLicense.updateRequest(),
  licensesController.update
);
licensesRouter.delete(
  '/licenses/:id',
  auth,
  admin,
  ...validateLicense.destroyRequest(),
  licensesController.destroy
);

export default licensesRouter;
