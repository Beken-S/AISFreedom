import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'sequelize';

import { BaseError, UnprocessableEntityError } from '../modules/error';

async function errorHandler(
  error: BaseError | Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): Promise<void> {
  if (error instanceof UnprocessableEntityError) {
    response.status(error.status).send({
      status: error.status,
      message: error.message,
      cause: error.errors,
    });
  } else if (error instanceof BaseError) {
    response.status(error.status).send({
      status: error.status,
      message: error.message,
    });
  } else if (error instanceof SyntaxError) {
    response.status(400).send({
      status: 400,
      message: 'Ошибка. Неверный синтаксис запроса.',
    });
  } else if (error instanceof ValidationError) {
    response.status(422).send({
      status: 422,
      message: 'Ошибка. Проверьте правильность введенных данных.',
    });
  } else {
    response.status(500).send({
      status: 500,
      message: 'Ошибка. Попробуйте еще раз через несколько минут.',
    });
  }
}

export default errorHandler;
