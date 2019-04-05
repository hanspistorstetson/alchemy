defmodule AlchemyWeb.AuthenticationTest do
  use AlchemyWeb.ConnCase

  alias Alchemy.{Accounts, Repo}
  alias AlchemyWeb.Authentication

  @opts Authentication.init([])

  def put_auth_token_in_header(conn, token) do
    conn
    |> put_req_header("authorization", "Token token=\"#{token}\"")
  end

  test "finds the user by token", %{conn: conn} do
    {:ok, user} = Accounts.register_user(%{email: "test@test.fcom"})
    {:ok, session} = Accounts.create_session(%{user_id: user.id})

    conn =
      conn
      |> put_auth_token_in_header(session.token)
      |> Authentication.call(@opts)

    assert conn.assigns.current_user
  end

  test "invalid token", %{conn: conn} do
    conn =
      conn
      |> put_auth_token_in_header("foo")
      |> Authentication.call(@opts)

    assert conn.status == 401
    assert conn.halted
  end

  test "no token", %{conn: conn} do
    conn = Authentication.call(conn, @opts)

    assert conn.status == 401
    assert conn.halted
  end
end
