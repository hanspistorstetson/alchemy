import React from "react";
import axios from "axios";
import UserForm from "../components/UserForm";
import { loginUser } from "../_actions";
import history from "../_helpers/history";

const SIGN_IN_URL = "http://localhost:4000/api/sessions";
const SIGN_UP_URL = "http://localhost:4000/api/users";

class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLogin: true
    };
  }

  onSubmit = event => {
    const { isLogin, email, password } = this.state;

    const URL = isLogin ? SIGN_IN_URL : SIGN_UP_URL;

    const userParams = {
      user: {
        email,
        password
      }
    };

    console.log(userParams);
    axios
      .post(URL, userParams)
      .then(res => localStorage.setItem("userid", res.data.userid))
      .then(() => {
        history.push("/");
        location.reload();
      });

    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  swapFormType = event => {
    const { isLogin } = this.state;
    this.setState({
      isLogin: !isLogin
    });

    event.preventDefault();
  };

  render() {
    const { isLogin } = this.state;
    return (
      <div>
        <UserForm
          onSubmit={this.onSubmit}
          onInputChange={this.handleChange}
          swapFormType={this.swapFormType}
        >
          {isLogin ? "Sign In" : "Sign Up"}
        </UserForm>
      </div>
    );
  }
}

export default SignInPage;
