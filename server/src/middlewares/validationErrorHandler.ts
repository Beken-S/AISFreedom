import { NextFunction, Response, Request } from 'express';
import { ValidationError } from 'runtypes';
import {
  ValidationError as SequelizeValidationError,
  ForeignKeyConstraintError,
} from 'sequelize';

import { BadRequestError } from '../modules/error';

async function validationErrorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (err instanceof ValidationError || err instanceof SyntaxError) {
    next(new BadRequestError('Неверные атрибуты в теле запроса.'));
  }

  if (err instanceof SequelizeValidationError) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      next(new BadRequestError('Такая запись уже существует в базе данных.'));
    }

    next(new BadRequestError('Неверные значения атрибутов в теле запроса.'));
  }

  if (err instanceof ForeignKeyConstraintError) {
    next(
      new BadRequestError(
        'В базе данных отсутствует одно или несколько связанных значений.'
      )
    );
  }

  next(err);
}

export default validationErrorHandler;
