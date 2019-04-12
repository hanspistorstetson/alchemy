import axios from "axios";
import { userConstants } from "../_constants";
import history from "../_helpers/history";

const URL = "http://localhost:4000/api";

const loginSuccess = token => ({ type: userConstants.LOGIN_SUCCESS, token });

const loginFailure = message => ({
  type: userConstants.LOGIN_FAILURE,
  message
});

const logoutRequest = () => ({ type: userConstants.LOGOUT_REQUEST });

const loginUser = ({ email, password }) => {
  return dispatch => {
    const userParams = {
      user: {
        email,
        password
      }
    };

    const result = axios.post(`${URL}/sessions`, userParams);

    axios
      .post(`${URL}/sessions`, userParams)
      .then(result => {
        const { token } = result.data.data;

        localStorage.setItem("token", token);
        dispatch(loginSuccess(token));

        history.push("/");
      })
      .catch(error => {
        dispatch(logoutUser());
      });
  };
};

const logoutUser = () => {
  return dispatch => {
    localStorage.removeItem("token");
    history.push("/");
    dispatch(logoutRequest());
  };
};

const signUpUser = ({ email, password }) => dispatch => {
  const userParams = {
    user: {
      email,
      password
    }
  };

  axios
    .post(`${URL}/users`, userParams)
    .then(result => {
      console.log(result);
      dispatch(loginUser({ email, password }));
      history.push("/");
    })
    .catch(error => dispatch(logoutUser()));
};

const userActions = {
  loginUser,
  signUpUser,
  logoutUser
};

export default userActions;
