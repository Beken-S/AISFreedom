import { Response, NextFunction } from 'express';

import { UnauthorizedError } from '../modules/error';
import { tokenService } from '../services';
import { AuthRequest } from '../types';

async function auth(
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const authorizationHeader = req.headers.authorization;

    if (authorizationHeader == null) {
      throw new UnauthorizedError();
    }

    const accessToken = authorizationHeader.split(' ')[1];

    if (accessToken == null) {
      throw new UnauthorizedError();
    }

    const userData = await tokenService.validateAccessToken(accessToken);

    if (userData == null) {
      throw new UnauthorizedError();
    }

    req.user = userData;
    next();
  } catch (err) {
    next(err);
  }
}

export default auth;
