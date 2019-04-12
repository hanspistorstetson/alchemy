import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";

import PrivateRoute from "./PrivateRoute";
import { userActions } from "../_actions";
import { SignInUpPage } from "../pages";

const fakeAuth = {
  isAuthenticated: false,
  signin(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100);
  }
};

const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class Login extends React.Component {
  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.signin(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }));
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer === true) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page</p>
        <button onClick={this.login}>Log In</button>
      </div>
    );
  }
}

const ToggleLoginButtonComp = ({ dispatch, loggedIn }) => {
  return (
    <button
      onClick={() =>
        loggedIn
          ? dispatch(userActions.SIGN_OUT_REQUEST())
          : dispatch(userActions.SIGN_IN_REQUEST())
      }
    >
      {loggedIn ? "Log Out" : "Log In"}
    </button>
  );
};

const mapStateToProps = state => {
  return { loggedIn: state.auth.loggedIn };
};

const ToggleLoginButton = connect(mapStateToProps)(ToggleLoginButtonComp);

const MyRouter = () => (
  <Router>
    Header
    <ul>
      <li>
        <Link to="/">Public</Link>
      </li>
      <li>
        <Link to="/protected">Protected</Link>
      </li>
      <li>{`Status: ${fakeAuth.isAuthenticated.toString()}`}</li>
      <li>
        <ToggleLoginButton />
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Public} />
      <Route exact path="/login" component={SignInUpPage} />
      <PrivateRoute exact path="/protected" component={Protected} />
    </Switch>
  </Router>
);

export default MyRouter;
