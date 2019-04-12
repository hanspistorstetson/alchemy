defmodule AlchemyWeb.TweetView do
  use AlchemyWeb, :view
  alias AlchemyWeb.TweetView

  def render("index.json", %{tweets: tweets}) do
    %{data: render_many(tweets, TweetView, "tweet.json")}
  end

  def render("show.json", %{tweet: tweet}) do
    %{data: render_one(tweet, TweetView, "tweet.json")}
  end

  def render("tweet.json", %{tweet: tweet}) do
    %{id: tweet.id,
      title: tweet.title,
      text: tweet.text,
      timestamp: tweet.inserted_at
    }
  end
end
