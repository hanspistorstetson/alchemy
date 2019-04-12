import * as React from "react";
import { Link } from "react-router-dom";
import Main from "../components/Main";

const PageNotFound = () => (
  <Main>
    <h1>The page you requested was not found</h1>
    <div className="form-row text-center">
      <div className="col-12">
        <Link to="/">Return to the home page</Link>
      </div>
    </div>
  </Main>
);

export default PageNotFound;
