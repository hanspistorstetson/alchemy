defmodule AlchemyWeb.SessionControllerTest do
  use AlchemyWeb.ConnCase

  alias Alchemy.Accounts

  @valid_attrs %{email: "test@test.com", password: "password"}

  setup %{conn: conn} do
    Accounts.register_user(@valid_attrs)
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post(conn, Routes.session_path(conn, :create), user: @valid_attrs)
    data = json_response(conn, 201)["data"]

    assert token = data["token"]
    assert Accounts.get_session_by(token: token)
  end

  test "does not create resource and renders error when pssword is is invaild", %{conn: conn} do
    conn =
      post(conn, Routes.session_path(conn, :create),
        user: Map.put(@valid_attrs, :password, "wrong password")
      )

    assert json_response(conn, 401)["error"] != %{}
  end

  test "does not create resource and renders errors when email is invalid", %{conn: conn} do
    conn =
      post(conn, Routes.session_path(conn, :create),
        user: Map.put(@valid_attrs, :email, "not@found.com")
      )

    assert json_response(conn, 401)["error"] != %{}
  end
end
