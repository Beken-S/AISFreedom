const selectAuthStatus = (state) => state.auth.isAuth;

const selectAuthUser = (state) => state.auth.user;

const selectAuthToken = (state) => state.auth.token;

const selectAuthErrors = (state) => state.auth.errors;

export { selectAuthStatus, selectAuthUser, selectAuthToken, selectAuthErrors };
