import path = require('path');

import express = require('express');

import { articlesController } from '../controllers';
import { validateArticle } from '../validators';

const articleRouter = express.Router();

articleRouter.use(
  '/articles',
  express.static(path.resolve(__dirname, '../../db/files'))
);
articleRouter.get(
  '/articles',
  ...validateArticle.getAllRequest(),
  articlesController.getAll
);

export default articleRouter;
