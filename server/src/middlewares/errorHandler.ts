import { Request, Response, NextFunction } from 'express';

import { BaseError } from '../modules/error';

async function errorHandler(
  error: BaseError | Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): Promise<void> {
  if (error instanceof BaseError) {
    response.status(error.status).send({
      status: error.status,
      message: error.message,
    });
  } else {
    response.status(500).send({
      status: 500,
      message: 'Ошибка. Попробуйте еще раз через несколько минут.',
    });
  }
}

export { errorHandler };
