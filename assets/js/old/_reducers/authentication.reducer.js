import { userConstants } from "../_constants";

const loggedIn = !!localStorage.getItem("token");

const initialState = loggedIn
  ? { loggedIn: true, token: localStorage.getItem("token") }
  : { loggedIn: false, token: null };

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return { ...state, loggedIn: false, token: null };

    case userConstants.LOGIN_SUCCESS:
      return { ...state, loggedIn: true, token: action.token };

    case userConstants.LOGIN_FAILURE:
      return { ...state, loggedIn: false, token: null };

    case userConstants.LOGOUT_REQUEST:
      return { ...state, loggedIn: false, token: null };

    default:
      return state;
  }
};

export default authentication;
