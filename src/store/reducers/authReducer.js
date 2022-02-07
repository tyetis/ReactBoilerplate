const initialState = {
  loggedUser: null
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "LOGIN":
      return {
        loggedUser: {
          id: action.payload.id,
          email: action.payload.email,
          password: action.payload.password
        }
      };
    case "LOGOUT":
      return {
        loggedUser: null
      };
    case "GET_LOGGEDUSER":
      return state.loggedUser;
    default:
      return state;
  }
}
