import { userConstants } from "../_constants";

const initialState = {
  loggedIn: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.SIGN_IN_REQUEST:
      return { ...state, loggedIn: true };

    case userConstants.SIGN_OUT_REQUEST:
      return { ...state, loggedIn: false };

    default:
      return state;
  }
};

export default auth;
