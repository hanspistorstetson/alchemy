import * as React from "react";

import { connect } from "react-redux";
import thunkMiddleware from "redux-thunk";

import { loginUser } from "./_actions";

class Root extends React.Component {
  signIn = () => console.log("Sign in");

  signOut = () => console.log("Sign out!");

  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.signIn}>Sign in!</button>
        <button onClick={this.signOut}>Sign out!</button>
        You are currently logged in? {this.props.loggedIn}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);

  return {
    loggedIn: state.authentication.loggedIn
  };
};

export default connect(
  mapStateToProps,
  { loginUser }
)(Root);
