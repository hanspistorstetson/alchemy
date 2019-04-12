defmodule AlchemyWeb.SessionView do
  use AlchemyWeb, :view

  def render("show.json", %{session: session, userid: userid}) do
    %{data: render_one(session, AlchemyWeb.SessionView, "session.json"), userid: userid}
  end

  def render("session.json", %{session: session}) do
    %{token: session.token}
  end

  def render("error.json", _anything) do
    %{errors: "failed to authenticate"}
  end
end
