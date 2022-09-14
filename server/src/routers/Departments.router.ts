import express = require('express');

import { departmentController } from '../controllers';
import { validateDepartment } from '../validators';

const departmentRouter = express.Router();

departmentRouter.post(
  '/departments',
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
  ...validateDepartment.updateRequest(),
  departmentController.update
);
departmentRouter.delete(
  '/departments/:id',
  ...validateDepartment.destroyRequest(),
  departmentController.destroy
);

export default departmentRouter;
