defmodule AlchemyWeb.PageControllerTest do
  use AlchemyWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")

    assert conn
  end
end
