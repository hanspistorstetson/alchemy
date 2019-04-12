import React from "react";
import TweetItem from "./TweetItem";

class TweetList extends React.Component {
  render() {
    const { tweets } = this.props;
    console.log(tweets);
    return (
      <div>
        {tweets.map(tweet => (
          <TweetItem
            key={tweet.id}
            tweetTitle={tweet.title}
            tweetText={tweet.text}
            tweetTime={tweet.timestamp}
          />
        ))}
      </div>
    );
  }
}

export default TweetList;
