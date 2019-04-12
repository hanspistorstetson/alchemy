import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Main from "../components/Main";
import TweetCard from "../components/TweetCard";

class HomePage extends React.Component {
  render() {
    return (
      <Main>
        <TweetCard />
      </Main>
    );
  }
}

export default HomePage;
