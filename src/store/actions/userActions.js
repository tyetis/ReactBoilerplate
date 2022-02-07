export const AddUser = (user) => ({
  type: "ADD_USER",
  payload: user
});

export const UpdateUser = (user) => ({
  type: "UPDATE_USER",
  payload: user
});

export const DeleteUser = (id) => ({
  type: "DELETE_USER",
  payload: {
    id: id
  }
});

export const GetUsers = (text) => ({
  type: "GET_USERS",
  payload: {}
});

export const FilterUsers = (isActive) => ({
  type: "FILTER_USERS",
  payload: { isActive: isActive }
});
