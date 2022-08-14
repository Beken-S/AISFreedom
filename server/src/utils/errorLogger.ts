import fs from 'fs';

import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

function errorLogger(
  stream: fs.WriteStream | null = null
): ErrorRequestHandler {
  return async (
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const errorTime = new Date().toISOString();

    if (stream != null) stream.write(`${errorTime} - ${error.stack}\n`);
    else console.error(`${errorTime} -`, error);

    next(error);
  };
}

export { errorLogger };
