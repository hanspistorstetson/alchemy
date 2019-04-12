defmodule AlchemyWeb.Router do
  use AlchemyWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", AlchemyWeb do
    pipe_through :api

    resources "/languages", LanguageController, except: [:new, :edit]
    resources "/users", UserController, only: [:create]
    resources "/sessions", SessionController, only: [:create]
    resources "/tweets", TweetController, except: [:new, :edit]

    get "/users/tweets/:id", TweetController, :usertweets
    get "/tweets/contains/:string", TweetController, :contains
  end

  scope "/", AlchemyWeb do
    pipe_through :browser

    get "/*path", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", AlchemyWeb do
  #   pipe_through :api
  # end
end
