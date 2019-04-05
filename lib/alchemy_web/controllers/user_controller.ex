defmodule AlchemyWeb.UserController do
  use AlchemyWeb, :controller

  alias Alchemy.Accounts

  plug :scrub_params, "user" when action in [:create]

  def create(conn, %{"user" => user_params}) do
    case Accounts.register_user(user_params) do
      {:ok, user} ->
        conn
        |> put_status(:created)
        |> render("show.json", user: user)

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> put_view(AlchemyWeb.ChangesetView)
        |> render("error.json", changeset: changeset)
    end
  end
end
