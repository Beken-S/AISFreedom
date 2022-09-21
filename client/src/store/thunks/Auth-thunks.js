import {
  getLoginSuccess,
  getLoginFailure,
  getLogout,
  getRefreshTokenFailure,
  getRefreshTokenSuccess,
} from '../actions/Auth-actions';

import { HTTPHelper } from '@utils/httpHelper';

const fetchLogin =
  ({ password, login, email }) =>
  async (dispatch) => {
    const { status, user, access_token } = await HTTPHelper.fetchAsJson(
      '/api/user/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, email, password }),
      }
    );

    if (!status) {
      dispatch(getLoginSuccess(user, access_token));
    }

    if (status === 404) {
      dispatch(
        getLoginFailure({
          email: 'Пользователь не найден',
          login: 'Пользователь не найден',
        })
      );
    }

    if (status === 400) {
      dispatch(getLoginFailure({ password: 'Неверный пароль' }));
    }
  };

const fetchLogout = () => async (dispatch) => {
  await fetch('/api/user/logout', { method: 'POST' });
  dispatch(getLogout());
};

const fetchRefreshToken = () => async (dispatch) => {
  const { status, access_token } = await HTTPHelper.refreshToken();

  if (status) {
    dispatch(getRefreshTokenFailure());
  } else {
    dispatch(getRefreshTokenSuccess(access_token));
  }
};

export { fetchLogin, fetchRefreshToken, fetchLogout };
