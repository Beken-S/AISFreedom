import express = require('express');

import config from '../config';
import { programsController } from '../controllers';
import { auth, admin } from '../middlewares';
import { validateProgram } from '../validators';

const programsRouter = express.Router();

programsRouter.use(
  '/programs/logos',
  express.static(config.database.assets.logos)
);
programsRouter.use(
  '/programs/images',
  express.static(config.database.assets.images)
);
programsRouter.post(
  '/programs',
  auth,
  admin,
  ...validateProgram.createRequest(),
  programsController.create
);
programsRouter.get(
  '/programs',
  ...validateProgram.getAllRequest(),
  programsController.getAll
);
programsRouter.get(
  '/programs/search',
  ...validateProgram.searchRequest(),
  programsController.search
);
programsRouter.get(
  '/programs/:id',
  ...validateProgram.getByIdRequest(),
  programsController.getById
);
programsRouter.patch(
  '/programs/:id',
  auth,
  admin,
  ...validateProgram.updateRequest(),
  programsController.update
);
programsRouter.patch(
  '/programs/:id/rate',
  ...validateProgram.rateRequest(),
  programsController.rate
);
programsRouter.delete(
  '/programs/:id',
  auth,
  admin,
  ...validateProgram.destroyRequest(),
  programsController.destroy
);
programsRouter.post(
  '/programs/images',
  auth,
  admin,
  ...validateProgram.saveImagesRequest(),
  programsController.saveImages
);

export default programsRouter;
