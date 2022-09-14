import express = require('express');

import { sourcesController } from '../controllers';
import { validateSource } from '../validators';

const sourcesRouter = express.Router();

sourcesRouter.post(
  '/sources',
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
  ...validateSource.updateRequest(),
  sourcesController.update
);
sourcesRouter.delete(
  '/sources/:id',
  ...validateSource.destroyRequest(),
  sourcesController.destroy
);

export default sourcesRouter;
