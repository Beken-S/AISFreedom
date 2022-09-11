import path = require('path');

import express = require('express');

import { normativeDocumentsController } from '../controllers';
import { validateNormativeDocument } from '../validators';

const normativeDocumentRouter = express.Router();

normativeDocumentRouter.use(
  '/normative_documents',
  express.static(path.resolve(__dirname, '../../db/files'))
);
normativeDocumentRouter.get(
  '/normative_documents',
  ...validateNormativeDocument.getAllRequest(),
  normativeDocumentsController.getAll
);

export default normativeDocumentRouter;
