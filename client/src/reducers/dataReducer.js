export const SET_USERS = 'SET_USERS';
export const SET_MATCHES = 'SET_MATCHES';

const dataReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users,
        loading: false,
      };
    case SET_MATCHES:
      return {
        ...state,
        matches: action.matches,
        loading: false,
      };
    default:
      return state;
  }
};

export default dataReducer;