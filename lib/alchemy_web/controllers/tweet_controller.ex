defmodule AlchemyWeb.TweetController do
  use AlchemyWeb, :controller

  alias Alchemy.Tweets
  alias Alchemy.Tweets.Tweet

  action_fallback AlchemyWeb.FallbackController

  def index(conn, _params) do
    tweets = Tweets.list_tweets()
    render(conn, "index.json", tweets: tweets)
  end

  def create(conn, %{"tweet" => tweet_params}) do
    with {:ok, %Tweet{} = tweet} <- Tweets.create_tweet(tweet_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.tweet_path(conn, :show, tweet))
      |> render("show.json", tweet: tweet)
    end
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

  def usertweets(conn, %{"id" => id}) do
    tweets = Alchemy.Tweets.get_tweets_by_user(id)
    render(conn, "index.json", tweets: tweets)
  end

  def contains(conn, %{"string" => string}) do
    tweets = Alchemy.Tweets.get_tweets_contains(string)
    render(conn, "index.json", tweets: tweets)
  end
end
