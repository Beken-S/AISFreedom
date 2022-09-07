import path = require('path');

import express = require('express');

import { programsController } from '../controllers';
import { validateProgram } from '../validators';

const programsRouter = express.Router();

programsRouter.use(
  '/programs/logos',
  express.static(path.resolve(__dirname, '../../db/logos'))
);
programsRouter.use(
  '/programs/images',
  express.static(path.resolve(__dirname, '../../db/images'))
);
programsRouter.post(
  '/programs',
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
programsRouter.put(
  '/programs/:id',
  ...validateProgram.updateRequest(),
  programsController.update
);
programsRouter.delete(
  '/programs/:id',
  ...validateProgram.destroyRequest(),
  programsController.destroy
);
programsRouter.post(
  '/programs/images',
  ...validateProgram.saveImagesRequest(),
  programsController.saveImages
);

export default programsRouter;
