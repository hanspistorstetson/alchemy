import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

class TweetItem extends React.Component {
  render() {
    const { classes, tweetTitle, tweetText, tweetTime } = this.props;
    console.log(tweetTime);
    return (
      <div>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" />
          </ListItemAvatar>
          <ListItemText
            primary={`${tweetTitle} - ${
              new Date(tweetTime).toLocaleString("en-US").split(",")[1]
            }`}
            secondary={
              <React.Fragment>
  <Typography
                  component="span"
                  className={classes.inline}
                  color="textPrimary"
                >
                  {"Hans Pistor:  "}
                </Typography>
  {tweetText}
              </React.Fragment>
            }
          />
        </ListItem>
      </div>
    );
  }
}

export default withStyles(styles)(TweetItem);
