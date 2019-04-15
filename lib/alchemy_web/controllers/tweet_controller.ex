defmodule AlchemyWeb.TweetController do
  use AlchemyWeb, :controller

  alias Alchemy.Tweets
  alias Alchemy.Tweets.Tweet

  action_fallback AlchemyWeb.FallbackController

  def index(conn, _params) do
    tweets = Tweets.tweets_by_date()
    render(conn, "index.json", tweets: tweets)
  end

  def create(conn, %{"tweet" => tweet_params}) do
    with {:ok, %Tweet{} = tweet} <- Tweets.create_tweet(tweet_params) do
      conn
      |> render("show.json", tweet: tweet)
    end
  end

  def search(conn, %{"q" => query}) do
    tweets = Tweets.get_search_tweets(query)
    render(conn, "index.json", tweets: tweets)
  end

  def usersearch(conn, %{"q" => query}) do
    tweets = Tweets.get_user_tweets(query)
    render(conn, "index.json", tweets: tweets)
  end


  def show(conn, %{"id" => id}) do
    tweet = Tweets.get_tweet!(id)
    render(conn, "show.json", tweet: tweet)
  end

  def update(conn, %{"id" => id, "tweet" => tweet_params}) do
    tweet = Tweets.get_tweet!(id)

    with {:ok, %Tweet{} = tweet} <- Tweets.update_tweet(tweet, tweet_params) do
      render(conn, "show.json", tweet: tweet)
    end
  end

  def delete(conn, %{"id" => id}) do
    tweet = Tweets.get_tweet!(id)

    with {:ok, %Tweet{}} <- Tweets.delete_tweet(tweet) do
      send_resp(conn, :no_content, "")
    end
  end
end
