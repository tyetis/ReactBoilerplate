const initialState = {
  users: [],
  visibilityFilter: {
    isActive: null
  }
};

export default function userReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((n) => {
          if (n.id === action.payload.id) {
            return action.payload;
          } else return n;
        })
      };
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter((n) => n.id !== action.payload.id)
      };
    case "GET_USERS":
      return {
        users: state.users
      };
    case "FILTER_USERS":
      return {
        ...state,
        visibilityFilter: action.payload
      };
    default:
      return state;
  }
}
