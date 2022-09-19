import jwt = require('jsonwebtoken');

import config from '../config';
import { Token, UserData } from '../models';
import { NotFoundError } from '../modules/error';
import { Tokens } from '../types';

async function generateTokens(payload: UserData): Promise<Tokens> {
  const accessToken = jwt.sign(payload, config.server.jwtSecret.access, {
    expiresIn: '10m',
  });
  const refreshToken = jwt.sign(payload, config.server.jwtSecret.refresh, {
    expiresIn: '1d',
  });

  return { accessToken, refreshToken };
}

async function saveToken(userId: number, refreshToken: string): Promise<Token> {
  const prevToken = await Token.findOne({ where: { user_id: userId } });

  if (prevToken != null) {
    prevToken.set({ refresh_token: refreshToken });
    return prevToken.save();
  }

  return Token.create({ user_id: userId, refresh_token: refreshToken });
}

async function findToken(refreshToken: string): Promise<Token | null> {
  return Token.findOne({
    where: { refresh_token: refreshToken },
  });
}

async function removeToken(refreshToken: string): Promise<void> {
  const deleteToken = await findToken(refreshToken);

  if (deleteToken == null) {
    throw new NotFoundError('Удаляемый токен не найден.');
  }

  return deleteToken.destroy();
}

async function validateAccessToken(token: string): Promise<UserData | null> {
  try {
    const user = jwt.verify(token, config.server.jwtSecret.access);
    return user as UserData;
  } catch (e) {
    return null;
  }
}

async function validateRefreshToken(token: string): Promise<UserData | null> {
  try {
    const user = jwt.verify(token, config.server.jwtSecret.refresh);

    return user as UserData;
  } catch (e) {
    return null;
  }
}

export {
  generateTokens,
  saveToken,
  findToken,
  removeToken,
  validateAccessToken,
  validateRefreshToken,
};
