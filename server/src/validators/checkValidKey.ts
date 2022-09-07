import { Request, Response, NextFunction } from 'express';

import { BadRequestError } from '../modules/error';
import { isKey } from '../utils';

function checkValidKey<T>(
  keys: T[],
  location: 'query' | 'params' | 'body' | 'files' = 'body',
  message?: string
): (req: Request, res: Response, nex: NextFunction) => Promise<void> {
  return async function (req, res, next): Promise<void> {
    if (location == 'files' && req[location] == null) {
      next(new BadRequestError('В запросе отсутствуют файлы.'));
    }

    for (const key in req[location]) {
      if (!isKey<T>(keys, key)) {
        next(
          new BadRequestError(
            message != null
              ? `${message} ${key}.`
              : `Недопустимое поле ${key} в теле запроса.`
          )
        );
      }
    }
    next();
  };
}

export default checkValidKey;
