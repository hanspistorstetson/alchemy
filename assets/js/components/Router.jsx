import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "../_helpers";
import { userActions } from "../_actions";

class TestComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    };
  }

  toggleLogin = () => {
    const { dispatch, loggedIn } = this.props;
    loggedIn
      ? dispatch(userActions.SIGN_OUT_REQUEST())
      : dispatch(userActions.SIGN_IN_REQUEST());
  };

  render() {
    return (
      <div>
        You are currently 
{' '}
{this.props.loggedIn ? "Logged In" : "Logged Out"}
        <button onClick={this.toggleLogin}>test</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ loggedIn: state.auth.loggedIn });

const Test = connect(mapStateToProps)(TestComp);

const MyRouter = () => (
  <div>
    <Router history={history}>
      Header
      <Switch>
        <Route exact path="/" component={Test} />
      </Switch>
    </Router>
  </div>
);

export default MyRouter;
