import express = require('express');

import config from '../config';
import { normativeDocumentsController } from '../controllers';
import { validateNormativeDocument } from '../validators';

const normativeDocumentRouter = express.Router();

normativeDocumentRouter.use(
  '/normative_documents',
  express.static(config.database.assets.files)
);
normativeDocumentRouter.get(
  '/normative_documents',
  ...validateNormativeDocument.getAllRequest(),
  normativeDocumentsController.getAll
);

export default normativeDocumentRouter;
