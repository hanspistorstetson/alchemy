import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import axios from "axios";

import Main from "../components/Main";
import TweetList from "../components/TweetList";
import withRoot from "../_helpers/withRoot";

const BASE_URL = 'http://hanspistor.com:4000'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    textAlign: "center",
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "90%",
    margin: "5% auto"
  },
  createForm: {
    width: "60%",
    margin: "0 auto"
  },
  tweetList: {
    textAlign: "left",
    paddingTop: theme.spacing.unit * 10
  }
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweetTitle: "",
      tweetText: "",
      tweetList: []
    };
  }

  componentDidMount() {
    this.getAllTweets();
  }

  getAllTweets = () => {
    const { state } = this;
    axios
      .get(`${BASE_URL}/api/tweets`)
      .then(res => this.setState({ ...state, tweetList: res.data.data }))
      .catch(error => console.log(error));
  };

  postTweet = tweetParams => {
    axios
      .post(`${BASE_URL}/api/tweets`, tweetParams)
      .then(res => this.getAllTweets());
  };

  handleChange = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    const { tweetText, tweetTitle } = this.state;

    const tweetParams = {
      tweet: {
        text: tweetText,
        title: tweetTitle,
        user_id: 1
      }
    };

    this.postTweet(tweetParams);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          {localStorage.getItem("userid") ? (
            <div className={classes.createForm}>
              <Typography variant="h3">Submit a New Tweet</Typography>
              <form method="POST" onSubmit={this.handleSubmit}>
                <FormControl margin="normal" required fullWidth>
                  <TextField
                    id="title"
                    name="tweetTitle"
                    label="Tweet Title"
                    value={this.state.tweetTitle}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                  <TextField
                    id="text"
                    name="tweetText"
                    label="Tweet Text"
                    multiline
                    rows="4"
                    value={this.state.tweetText}
                    onChange={this.handleChange}
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </form>
            </div>
          ) : null}
          <div className={localStorage.getItem('userid') ? classes.tweetList : null}>
            <Typography variant="h3">List of All Posts</Typography>
            <TweetList tweets={this.state.tweetList} />
          </div>
        </Paper>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(HomePage));
