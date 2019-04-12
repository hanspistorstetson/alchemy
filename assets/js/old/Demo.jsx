import * as React from "react";

import { connect } from "react-redux";
import thunkMiddleware from "redux-thunk";

import { userActions } from "./_actions";

class Demo extends React.Component {
  signIn = () => {
    this.props.loginUser({
      email: "hpistor@stetson.edu",
      password: "sabals12"
    });
  };

  signOut = () => this.props.logoutUser();

  signUp = () => {
    this.props.signUpUser({
      email: "hpistor@stetson.edu",
      password: "sabals12"
    });
  };

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        <button onClick={this.signIn}>Sign in!</button>
        <button onClick={this.signOut}>Sign out!</button>
        <button onClick={this.signUp}>Sign Up!</button>
        {loggedIn ? <h1>You are logged in</h1> : <h1>You are not logged in</h1>}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginUser: credentials => dispatch(userActions.loginUser(credentials)),
  signUpUser: credentials => dispatch(userActions.signUpUser(credentials)),
  logoutUser: () => dispatch(userActions.logoutUser())
});

const mapStateToProps = state => {
  return {
    loggedIn: state.authentication.loggedIn
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);
