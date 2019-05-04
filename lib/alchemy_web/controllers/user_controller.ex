defmodule AlchemyWeb.UserController do
  use AlchemyWeb, :controller

  import Ecto

  alias Alchemy.Guardian
  alias Alchemy.Tweets
  alias Alchemy.Accounts
  alias Alchemy.Accounts.User

  action_fallback AlchemyWeb.FallbackController

  def sign_in(conn, %{"email" => email, "password" => password}) do
    case Accounts.token_sign_in(email, password) do
      {:ok, token, _claims} ->
        conn
        |> render("jwt.json", jwt: token, email: email)
      _ ->
        conn
        |> render("error.json", message: "Unauthorized")
    end
  end

  def create(conn, %{"user" => user_params}) do
    with {:ok, %User{} = user} <- Accounts.create_user(user_params),
         {:ok, token, _claims } <- Guardian.encode_and_sign(user) do

      conn
      |> render("jwt.json", jwt: token, email: user_params["email"])
    end
  end

  def show(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    conn
    |> render("user.json", user: user)
  end

  def tweets(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    email_list = String.split(user.email, "@")
    [username | _ ] = email_list
    tweets = Tweets.get_user_tweets(username)
    conn
    |> render("my_tweets.json", user: user, tweets: tweets)

  end

  def stats(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    email_list = String.split(user.email, "@")
    [username | _ ] = email_list

    total_tweets = Accounts.get_total_tweets(username)

    conn
    |> render("stats.json", total_tweets: total_tweets)


  end


  def update(conn, %{"id" => id, "user" => user_params}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{} = user} <- Accounts.update_user(user, user_params) do
      render(conn, "show.json", user: user)
    end
  end

  def delete(conn, %{"id" => id}) do
    user = Accounts.get_user!(id)

    with {:ok, %User{}} <- Accounts.delete_user(user) do
      send_resp(conn, :no_content, "")
    end
  end
end
