import React from "react";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import TweetList from "../components/TweetList";
import withRoot from "../_helpers/withRoot";

const BASE_URL = 'http://hanspistor.com:4000'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    textAlign: "center",
    paddingBottom: theme.spacing.unit * 2,
    width: "90%",
    margin: "5% auto"
  },
  tweetList: {
    paddingTop: theme.spacing.unit * 2
  }
});

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetList: []
    };
  }

  componentDidMount() {
    this.getSearchedTweets(this.props.match.params.string);
  }

  getSearchedTweets = string => {
    const { state } = this;
    axios
      .get(`${BASE_URL}/api/tweets/contains/${string}`)
      .then(res => {
        console.log(res);
        this.setState({ ...state, tweetList: res.data.data });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <div className={classes.tweetList}>
            <Typography variant="h3">List of Searched Posts</Typography>
            <TweetList tweets={this.state.tweetList} />
          </div>
        </Paper>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(SearchPage));
