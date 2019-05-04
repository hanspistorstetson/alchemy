defmodule AlchemyWeb.UserView do
  use AlchemyWeb, :view
  alias AlchemyWeb.UserView
  alias AlchemyWeb.TweetView

  def render("index.json", %{users: users}) do
    %{data: render_many(users, UserView, "user.json")}
  end

  def render("show.json", %{user: user}) do
    %{data: render_one(user, UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email,
    }
  end

  def render("stats.json", %{total_tweets: total_tweets}) do
    %{
      total_tweets: total_tweets
    }
  end

  def render("jwt.json", %{jwt: jwt, email: email}) do
    %{jwt: jwt, email: email}
  end

  def render("my_tweets.json", %{user: user, tweets: tweets}) do
    %{tweets: render_many(tweets, TweetView, "tweet.json"), user: render_one(user, UserView, "user.json")}
  end

  def render("error.json", %{message: message}) do
    %{error: message}
  end
end
