import express = require('express');

import { sourcesController } from '../controllers';
import { auth, admin } from '../middlewares';
import { validateSource } from '../validators';

const sourcesRouter = express.Router();

sourcesRouter.post(
  '/sources',
  auth,
  admin,
  ...validateSource.createRequest(),
  sourcesController.create
);
sourcesRouter.get('/sources', sourcesController.getAll);
sourcesRouter.get(
  '/sources/:id',
  ...validateSource.getByIdRequest(),
  sourcesController.getById
);
sourcesRouter.patch(
  '/sources/:id',
  auth,
  admin,
  ...validateSource.updateRequest(),
  sourcesController.update
);
sourcesRouter.delete(
  '/sources/:id',
  auth,
  admin,
  ...validateSource.destroyRequest(),
  sourcesController.destroy
);

export default sourcesRouter;
