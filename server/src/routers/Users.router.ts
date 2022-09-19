import express = require('express');

import { usersController } from '../controllers';
import { auth, admin } from '../middlewares';
import { validateUser } from '../validators';

const usersRouter = express.Router();

usersRouter.post(
  '/user/create',
  auth,
  admin,
  ...validateUser.createRequest(),
  usersController.cerate
);
usersRouter.post(
  '/user/login',
  ...validateUser.loginRequest(),
  usersController.login
);
usersRouter.post('/user/logout', usersController.logout);
usersRouter.post('/user/refresh', usersController.refresh);

export default usersRouter;
