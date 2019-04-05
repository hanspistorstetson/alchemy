defmodule AlchemyWeb.PageController do
  use AlchemyWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
