defmodule AlchemyWeb.TweetView do
  use AlchemyWeb, :view
  alias AlchemyWeb.TweetView

  def render("index.json", %{tweets: tweets}) do
    %{tweets: render_many(tweets, TweetView, "tweet.json")}
  end

  def render("show.json", %{tweet: tweet}) do
    %{tweet: render_one(tweet, TweetView, "tweet.json")}
  end

  def render("tweet.json", %{tweet: tweet}) do
    %{id: tweet.id,
      content: tweet.content,
      username: tweet.username,
      created: tweet.inserted_at,
      likes: tweet.likes}
  end
end
