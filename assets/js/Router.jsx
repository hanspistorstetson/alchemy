import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  HomePage,
  FetchDataPage,
  PageNotFound,
  SignInPage,
  SignUpPage,
  UserPage,
  SearchPage
} from "./pages";
import { Header, Counter } from "./components";
import history from "./_helpers/history";

export default class MyRouter extends React.Component {
  render() {
    const { dispatch } = this.props;
    return (
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/counter" component={Counter} />
            <Route path="/fetch-data" component={FetchDataPage} />
            <Route path="/login" component={SignInPage} />
            <Route path="/userpage" component={UserPage} />
            <Route path="/search/:string" component={SearchPage} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}
