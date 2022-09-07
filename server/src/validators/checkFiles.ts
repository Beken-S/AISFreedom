import { Request, Response, NextFunction } from 'express';

import { UnprocessableEntityError } from '../modules/error';

function checkFiles(
  key: string
): (req: Request, res: Response, nex: NextFunction) => Promise<void> {
  return async function (req, res, next) {
    if (req.files == null || req.files[key] == null) {
      next(
        new UnprocessableEntityError(`Отсутствует обязательное поле ${key}.`)
      );
    }
    next();
  };
}

export default checkFiles;
