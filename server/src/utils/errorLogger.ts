import fs from 'fs';

import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

function errorLogger(stream?: fs.WriteStream): ErrorRequestHandler {
  return async (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const errorTime = new Date().toISOString();

    if (stream != null) stream.write(`${errorTime} - ${err.stack}\n`);
    else console.error(`${errorTime} -`, err);

    next(err);
  };
}

export default errorLogger;
