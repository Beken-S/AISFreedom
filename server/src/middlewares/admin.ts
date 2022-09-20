import { Response, NextFunction } from 'express';

import { ForbiddenError } from '../modules/error';
import { AuthRequest } from '../types';

async function admin(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    if (req.user?.role != 'admin') {
      throw new ForbiddenError();
    }

    next();
  } catch (err) {
    next(err);
  }
}

export default admin;
