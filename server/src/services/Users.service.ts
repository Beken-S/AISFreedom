import bcrypt = require('bcrypt');

import {
  User,
  UserCreationAttributes,
  UserData,
  LoginAttributes,
} from '../models';
import {
  NotFoundError,
  BadRequestError,
  UnauthorizedError,
} from '../modules/error';
import { tokenService } from '../services';
import { Tokens } from '../types';
import { getUserData } from '../utils';

async function create(attributes: UserCreationAttributes): Promise<UserData> {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashPassword = await bcrypt.hash(attributes.password, salt);

  const user = await User.create({ ...attributes, password: hashPassword });
  const userData = getUserData(user);

  const tokens = await tokenService.generateTokens(userData);

  await tokenService.saveToken(userData.id, tokens.refreshToken);

  return userData;
}

async function getByLoginOrEmail(
  login?: string,
  email?: string
): Promise<User> {
  if (login == null && email == null) {
    throw new BadRequestError('Не задан login или email');
  }

  if (login != null) {
    const user = await User.findOne({ where: { login } });

    if (user == null) {
      throw new NotFoundError(`Пользователь с login=${login} не найден.`);
    }

    return user;
  }

  const user = await User.findOne({ where: { email } });

  if (user == null) {
    throw new NotFoundError(`Пользователь с email=${email} не найден.`);
  }

  return user;
}

async function login({
  password,
  login,
  email,
}: LoginAttributes): Promise<{ tokens: Tokens; user: UserData }> {
  const user = await getByLoginOrEmail(login, email);
  const isPassEquals = await bcrypt.compare(password, user.password);

  if (!isPassEquals) {
    throw new BadRequestError('Указан неверный пароль.');
  }

  const userData = getUserData(user);
  const tokens = await tokenService.generateTokens({
    id: userData.id,
    role: userData.role,
  });

  await tokenService.saveToken(userData.id, tokens.refreshToken);

  return {
    tokens,
    user: userData,
  };
}

async function logout(refreshToken: string): Promise<void> {
  return tokenService.removeToken(refreshToken);
}

async function refresh(refreshToken: string): Promise<Tokens> {
  const [prevUserData, prevToken] = await Promise.all([
    tokenService.validateRefreshToken(refreshToken),
    tokenService.findToken(refreshToken),
  ]);

  if (prevUserData == null || prevToken == null) {
    throw new UnauthorizedError();
  }

  const user = await User.findByPk(prevUserData.id);

  if (user == null) {
    throw new NotFoundError(`Пользователь с id=${prevUserData.id} не найден.`);
  }

  const currentUserData = getUserData(user);
  const tokens = await tokenService.generateTokens(currentUserData);

  await tokenService.saveToken(currentUserData.id, tokens.refreshToken);

  return tokens;
}

export { create, login, logout, refresh };
