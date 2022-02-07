export const Login = (user) => ({
  type: "LOGIN",
  payload: user
});

export const Logout = () => ({
  type: "LOGOUT",
  payload: {}
});

export const GetLoggerUser = (user) => ({
  type: "GET_LOGGEDUSER",
  payload: {}
});
