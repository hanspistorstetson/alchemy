defmodule AlchemyWeb.Router do
  use AlchemyWeb, :router

  alias Alchemy.Guardian

  pipeline :api do
    plug :accepts, ["json"]
  end

  pipeline :authenticated do
    plug Guardian.AuthPipeline
  end

  scope "/api/v1", AlchemyWeb do
    pipe_through :api

    post "/sign_up", UserController, :create
    post "/sign_in", UserController, :sign_in
    get "/tweets", TweetController, :index
    post "/tweets", TweetController, :create
    get "/tweets/search", TweetController, :search
    get "/tweets/user", TweetController, :usersearch
  end

  scope "/api/v1", AlchemyWeb do
    pipe_through [:api, :authenticated]

    get "/my_user", UserController, :show
  end
end
