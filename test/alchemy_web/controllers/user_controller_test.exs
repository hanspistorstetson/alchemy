defmodule AlchemyWeb.UserControllerTest do
  use AlchemyWeb.ConnCase

  @valid_attrs %{email: "test@#test.com", password: "password"}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post(conn, Routes.user_path(conn, :create), user: @valid_attrs)
    assert %{"id" => id} = json_response(conn, 201)["data"]
  end
end
