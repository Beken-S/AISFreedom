const LOGIN_SUCCESS = 'AUTH::LOGIN_SUCCESS';
const LOGIN_FAILURE = 'AUTH::LOGIN_FAILURE';
const LOGOUT = 'AUTH::LOGOUT';
const REFRESH_TOKEN_SUCCESS = 'AUTH::REFRESH_TOKEN_SUCCESS';
const REFRESH_TOKEN_FAILURE = 'AUTH::REFRESH_TOKEN_FAILURE';

const getLoginSuccess = (user, token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      user,
      token,
    },
  };
};

const getLoginFailure = (errors) => {
  return {
    type: LOGIN_FAILURE,
    payload: errors,
  };
};

const getLogout = () => {
  return {
    type: LOGOUT,
  };
};

const getRefreshTokenSuccess = (token) => {
  return {
    type: REFRESH_TOKEN_SUCCESS,
    payload: token,
  };
};

const getRefreshTokenFailure = (token) => {
  return {
    type: REFRESH_TOKEN_FAILURE,
  };
};

export {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REFRESH_TOKEN_FAILURE,
  REFRESH_TOKEN_SUCCESS,
  getLoginSuccess,
  getLoginFailure,
  getLogout,
  getRefreshTokenFailure,
  getRefreshTokenSuccess,
};
