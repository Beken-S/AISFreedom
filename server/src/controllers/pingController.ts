import { NextFunction, Request, Response } from 'express';

async function ping(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  try {
    response.send('pong');
  } catch (error) {
    next(error);
  }
}

export { ping };
