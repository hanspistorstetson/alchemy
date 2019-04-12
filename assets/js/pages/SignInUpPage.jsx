import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import UserForm from "../components/UserForm";
import { urlConstants } from "../_constants";

class SignInUpPage extends React.Component {
  state = {
    email: "",
    password: "",
    isLogin: true
  };

  handleSubmit = event => {
    event.preventDefault();
    const { isLogin, email, password } = this.state;

    console.log(email);
    console.log(password);
    console.log(urlConstants.USERS_URL);

    axios.get(urlConstants.USERS_URL).then(res => console.log(res));
  };

  handleChange = event =>
    this.setState({ ...this.state, [event.target.name]: event.target.value });

  handleFormType = event => {
    const { isLogin } = this.state;
    this.setState({ ...state, isLogin: !isLogin });
  };

  render() {
    const { isLogin } = this.state;

    return (
      <UserForm
        onSubmit={this.handleSubmit}
        onInputChange={this.handleChange}
        swapFormType={this.handleFormType}
      >
        {isLogin ? "Sign In" : "Sign Up"}
      </UserForm>
    );
  }
}

export default connect()(SignInUpPage);
