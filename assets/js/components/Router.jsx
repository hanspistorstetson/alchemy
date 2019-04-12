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
import { userActions } from "../_actions";

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

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);

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

const AuthButton = withRouter(({ history }) =>
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome!
{" "}
      <button onClick={() => fakeAuth.signout(() => history.push("/"))}>
        Sign Out
      </button>
      )
    </p>
  ) : (
    <p>You are not logged in</p>
  )
);

const MyRouter = () => (
  <Router>
    <AuthButton />
    <ul>
      <li>
        <Link to="/">Public</Link>
      </li>
      <li>
        <Link to="/protected">Protected</Link>
      </li>
      <li>{`Status: ${fakeAuth.isAuthenticated.toString()}`}</li>
    </ul>
    <Switch>
      <Route exact path="/" component={Public} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/protected" component={Protected} />
    </Switch>
  </Router>
);

export default MyRouter;
