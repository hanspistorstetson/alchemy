defmodule AlchemyWeb.UserView do
  use AlchemyWeb, :view

  def render("show.json", %{user: user}) do
    %{data: render_one(user, AlchemyWeb.UserView, "user.json")}
  end

  def render("user.json", %{user: user}) do
    %{
      id: user.id,
      email: user.email
    }
  end
end
