import express = require('express');

import config from '../config';
import { articlesController } from '../controllers';
import { validateArticle } from '../validators';

const articleRouter = express.Router();

articleRouter.use('/articles', express.static(config.database.assets.files));
articleRouter.get(
  '/articles',
  ...validateArticle.getAllRequest(),
  articlesController.getAll
);

export default articleRouter;
