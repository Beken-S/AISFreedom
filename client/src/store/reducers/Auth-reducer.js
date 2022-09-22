import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILURE,
} from '../actions/Auth-actions';

const initialStateAuth = {
  user: null,
  token: null,
  errors: {},
  isAuth: false,
};

const authReducer = (state = initialStateAuth, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      const { user, token } = action.payload;
      return { user, token, errors: {}, isAuth: true };
    }
    case LOGIN_FAILURE: {
      return { ...state, errors: action.payload };
    }
    case LOGOUT: {
      return { user: null, token: null, errors: {}, isAuth: false };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        token: action.payload,
        isAuth: true,
      };
    }
    case REFRESH_TOKEN_FAILURE: {
      return {
        ...state,
        token: null,
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
