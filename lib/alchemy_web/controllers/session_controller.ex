defmodule AlchemyWeb.SessionController do
  use AlchemyWeb, :controller

  import Comeonin.Bcrypt, only: [checkpw: 2, dummy_checkpw: 0]

  alias Alchemy.Accounts

  def create(conn, %{"user" => user_params}) do
    user = Accounts.get_user_by(email: user_params["email"])

    cond do
      user && checkpw(user_params["password"], user.password_hash) ->
        {:ok, session} = Accounts.create_session(%{user_id: user.id})

        conn
        |> put_status(:created)
        |> render("show.json", session: session)

      user ->
        conn
        |> put_status(:unauthorized)
        |> render("error.json", user_params)

      true ->
        dummy_checkpw()

        conn
        |> put_status(:unauthorized)
        |> render("error.json", user_params)
    end
  end
end
