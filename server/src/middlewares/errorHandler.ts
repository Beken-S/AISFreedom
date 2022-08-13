import { Request, Response, NextFunction } from 'express';

import { BaseError } from '../modules/error';

async function errorHandler(
  error: BaseError,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): Promise<void> {
  response.status(error.status || 500).send({
    status: 'error',
    message: error.message,
  });
}

export { errorHandler };
