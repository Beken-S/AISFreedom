import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { UnprocessableEntityError } from '../modules/error';
import { normativeDocumentsService } from '../services';
import { PaginationParams } from '../types';

async function getAll(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError('Неверные параметры.', errors.array());
    }

    const addProgramRequests = await normativeDocumentsService.getAll(
      req.query as unknown as PaginationParams
    );

    res.json(addProgramRequests);
  } catch (err) {
    next(err);
  }
}

export { getAll };
