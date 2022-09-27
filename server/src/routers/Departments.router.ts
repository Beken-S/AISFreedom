import express = require('express');

import { departmentController } from '../controllers';
import { auth, admin } from '../middlewares';
import { validateDepartment } from '../validators';

const departmentRouter = express.Router();

departmentRouter.post(
  '/departments',
  auth,
  admin,
  ...validateDepartment.createRequest(),
  departmentController.create
);
departmentRouter.get('/departments', departmentController.getAll);
departmentRouter.get(
  '/departments/:id',
  ...validateDepartment.getByIdRequest(),
  departmentController.getById
);
departmentRouter.patch(
  '/departments/:id',
  auth,
  admin,
  ...validateDepartment.updateRequest(),
  departmentController.update
);
departmentRouter.delete(
  '/departments/:id',
  auth,
  admin,
  ...validateDepartment.destroyRequest(),
  departmentController.destroy
);

export default departmentRouter;
