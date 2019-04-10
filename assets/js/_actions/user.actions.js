import axios from "axios";
import { userConstants } from "../_constants";

const URL = "http:localhost:4000/api";

const loginSuccess = token => ({ type: userConstants.LOGIN_SUCCESS, token });

const loginFailure = () => ({ type: userConstants.LOGIN_FAILURE });

const loginUser = ({ email, password }, history) => dispatch => {
  const userParams = {
    user: {
      email,
      password
    }
  };

  const result = axios.post(`${URL}/sessions`, userParams);

  if (result.status === 201) {
    const { token } = result.data;
    dispatch(loginSuccess(token));
  } else {
    dispatch(loginFailure());
  }
};

export { loginSuccess, loginFailure, loginUser };
