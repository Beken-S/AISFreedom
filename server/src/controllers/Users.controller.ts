import { Request, Response, NextFunction } from 'express';
import { validationResult } from 'express-validator';

import { UnprocessableEntityError, UnauthorizedError } from '../modules/error';
import { usersService } from '../services';

async function cerate(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError(
        'Неверные значения в теле запроса.',
        errors.array()
      );
    }
    const createdUser = await usersService.create(req.body);

    res.json(createdUser);
  } catch (err) {
    next(err);
  }
}

async function login(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new UnprocessableEntityError(
        'Неверные значения в теле запроса.',
        errors.array()
      );
    }

    const loginData = await usersService.login(req.body);

    res.cookie('refreshToken', loginData.tokens.refreshToken, {
      maxAge: 10 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.json({
      message: 'Вход выполнен успешно.',
      user: loginData.user,
      access_token: loginData.tokens.accessToken,
    });
  } catch (err) {
    next(err);
  }
}

async function logout(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { refreshToken } = req.cookies;

    if (refreshToken == null || refreshToken === '') {
      throw new UnauthorizedError();
    }

    await usersService.logout(refreshToken);

    res.clearCookie('refreshToken');
    res.send({
      message: 'Выход выполнен успешно.',
    });
  } catch (err) {
    next(err);
  }
}

async function refresh(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const { refreshToken } = req.cookies;

    if (refreshToken == null || refreshToken === '') {
      throw new UnauthorizedError();
    }

    const tokens = await usersService.refresh(refreshToken);

    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 10 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    res.send({
      message: 'Токен успешно обновлен.',
      access_token: tokens.accessToken,
    });
  } catch (err) {
    next(err);
  }
}

export { cerate, login, logout, refresh };
