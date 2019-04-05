defmodule AlchemyWeb.Authentication do
  import Plug.Conn
  alias Alchemy.Accounts

  def init(options) do
    options
  end

  def call(conn, _opts) do
    case find_user(conn) do
      {:ok, user} -> assign(conn, :current_user, user)
      _else -> auth_error!(conn)
    end
  end

  defp find_user(conn) do
    with auth_header = get_req_header(conn, "authorization"),
         {:ok, token} <- parse_token(auth_header),
         {:ok, session} <- find_session_by_token(token),
         do: find_user_by_session(session)
  end

  defp parse_token(["Token token=" <> token]) do
    {:ok, String.replace(token, "\"", "")}
  end

  defp parse_token(_not_token_header), do: :error

  defp find_session_by_token(token) do
    case Accounts.get_session_by(%{token: token}) do
      nil -> :error
      session -> {:ok, session}
    end
  end

  defp find_user_by_session(session) do
    case Accounts.find_user_by_session(session) do
      nil -> :error
      user -> {:ok, user}
    end
  end

  defp auth_error!(conn) do
    conn
    |> put_status(:unauthorized)
    |> Phoenix.Controller.render(AlchemyWeb.ErrorView, "401.json")
    |> halt()
  end
end
