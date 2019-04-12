import { urlConstants, userConstants } from "../_constants";

const LOGIN_SUCCESS = token => ({ type: userConstants.SIGN_IN_SUCCESS, token });

const SIGN_OUT_REQUEST = () => ({ type: userConstants.SIGN_OUT_REQUEST });

const SIGN_IN_REQUEST = () => ({ type: userConstants.SIGN_IN_REQUEST });

const userActions = {
  SIGN_IN_REQUEST,
  SIGN_OUT_REQUEST
};

export default userActions;
