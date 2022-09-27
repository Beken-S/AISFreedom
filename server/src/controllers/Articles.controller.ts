import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { UnprocessableEntityError } from '../modules/error';
import { articleService } from '../services';
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

    const articles = await articleService.getAll(
      req.query as unknown as PaginationParams
    );

    res.json(articles);
  } catch (err) {
    next(err);
  }
}

export { getAll };
