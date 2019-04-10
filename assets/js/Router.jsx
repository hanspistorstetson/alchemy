import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";

import { HomePage, FetchDataPage, PageNotFound, SignInPage } from "./pages";
import { Header, Counter } from "./components";
import history from './_helpers/history'

const divStyle = {
  margin: "0px"
};

export default class MyRouter extends React.Component {
  render() {
    const { dispatch } = this.props;
    console.log(dispatch);
    console.log(this.props);
    return (
      <Router history={history}>
        <div className="app">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/counter" component={Counter} />
            <Route path="/fetch-data" component={FetchDataPage} />
            <Route path="/login" component={SignInPage} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}
